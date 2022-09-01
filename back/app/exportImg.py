import cv2

def get_roi(img):
    # CHECK DARK, LIGHT MODE and convert gray scale
    THEME, img_gray = handle_mode(img)
    
    if THEME == 'DARK':
        THRESHOLD_THEME = 30
    else:
        THRESHOLD_THEME = 10
    
    ret, otsu = cv2.threshold(img_gray, THRESHOLD_THEME, 255, cv2.THRESH_BINARY)
    contours, hierarchy = cv2.findContours(otsu, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
  
    # size별로 sort.
    cnts = sorted(contours, key = cv2.contourArea, reverse=True)
    
    # 가장 큰 box = ROI
    x, y, width, height = cv2.boundingRect(cnts[0])
    
    return img[y:y+height, x:x+width], THEME

def handle_mode(img):
    # 라이트 모드 대응 - 색 반전, THRESHOLD 조정
    THEME = 'DARK'
    
    if img[0][0][0] > 100:
        img = 255 - img
        THEME = 'LIGHT'

    img_conv = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    return THEME, img_conv

def time_exception(custom_time):
    minute = custom_time - int(custom_time)
    minute_output = [0, 0.25, 0.5, 0.75]
    
    target = [abs(x - minute) for x in minute_output]
    output = int(custom_time) + minute_output[target.index(min(target))]
    
    return output

def get_time(img, box, box_height, box_width):

    start = end = box[0][0]
    for temp in box:
        if sum(temp[0]) > sum(end):
            end = temp[0]


    time_line = int(img.shape[0]/box_height) + 9
    class_start = (img.shape[0] - start[1])/box_height
    class_end = (end[1] - start[1])/box_height
    
    class_daytime = calculate_daytime(img.shape[1], box_width, start[0])
    class_time = calculate_time(time_line - class_start, class_end)

    return class_daytime, class_time

def get_timebox(THEME, ROI, box_height, box_width):

    if THEME == 'LIGHT': # normal theme
        # 110 이 가장 잘 나온 듯
        TEMP = 255 - ROI
        gray = cv2.cvtColor(TEMP, cv2.COLOR_BGR2GRAY)
    else:
        gray = cv2.cvtColor(ROI, cv2.COLOR_BGR2GRAY)

    ret, otsu2 = cv2.threshold(gray, -1, 255,  cv2.THRESH_BINARY | cv2.THRESH_OTSU)

    contours, hierarchy = cv2.findContours(otsu2, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    # box 크기로 필요 없는 것 제거
    results = [x for x in contours if cv2.contourArea(x) > 1000]

    export_data = {}
    
    for box in results:
        class_daytime, class_time = get_time(ROI, box, box_height, box_width)

        if class_daytime in export_data:
            export_data[class_daytime].append(class_time)
        else:
            export_data[class_daytime] = [class_time]

    return export_data

def get_standard_box_size(ROI):
    # CHECK DARK, LIGHT MODE and convert gray scale
    THEME, img_gray = handle_mode(ROI)
    
    if THEME == 'DARK':
        THRESHOLD_THEME = 30
    else:
        THRESHOLD_THEME = 10
    
    ret, otsu = cv2.threshold(img_gray, THRESHOLD_THEME, 255, cv2.THRESH_BINARY)
    contours, hierarchy = cv2.findContours(otsu, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
    
    # size별로 sort.
    cnts = sorted(contours, key = cv2.contourArea, reverse=True)
    
    # 두 번째 sizse = 기본 box
    x, y, width, height = cv2.boundingRect(cnts[1])
    
    return height, width

def calculate_daytime(roi_width, box_width, startpoint):
    daytime_output = ['금','목','수','화','월']

    for daytime in daytime_output:
        roi_width = roi_width - box_width
        if roi_width - startpoint < 5:
            return daytime

def calculate_time(start, end):
    starttime_list = [9, 10.5, 12, 13.5, 15, 16.5, 18, 19.5]
    endtime_list = [10.25, 11.75, 13.25, 14.75, 16.25, 17.75, 19.25, 20.75]
    
    class_start = [abs(x - start) for x in starttime_list]
    class_end = [abs(x - (start + end)) for x in endtime_list]
    
    output_start = starttime_list[class_start.index(min(class_start))]
    output_end = endtime_list[class_end.index(min(class_end))]


    # 커스텀으로 한 시간의 경우 예외 처리 - 30분 단위로 가장 가까운 곳으로 지정
    if min(class_start) > 0.35:
        output_start = time_exception(start)
        output_end = time_exception(start + end)

    return (f'{output_start}-{output_end}')

def export_img(img):

    # get roi if needed
    ROI, THEME = get_roi(img)
    
    # 안에 아무것도 없으면서 가장 큰 box - 기준이 되는 box size.
    box_height, box_width = get_standard_box_size(ROI)
    
    # get timetable box
    output = get_timebox(THEME, ROI, box_height, box_width)
    
    return output