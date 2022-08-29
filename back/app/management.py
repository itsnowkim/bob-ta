def counting_table(time_map, data):
  starttime_list = [9, 10.5, 12, 13.5, 15, 16.5, 18, 19.5]
  endtime_list = [10.25, 11.75, 13.25, 14.75, 16.25, 17.75, 19.25, 20.75]
  # key = 요일
  for key in data:
    # 시작 시간, 끝 시간 가져오기
    for classtime in data[key]:
      start_time, end_time = classtime.split('-')
      start_idx = starttime_list.index(float(start_time))
      end_idx = endtime_list.index(float(end_time))
      # 연강이 아닌 경우
      if start_idx == end_idx:
        time_map[key][start_idx] += 1
      else:
        for idx in range(start_idx, end_idx+1):
          time_map[key][idx] += 1
  
  return time_map

def time_mapping():
  mapping_table = {
    '월':{},
    '화':{},
    '수':{},
    '목':{},
    '금':{}
  }

  for daytime in mapping_table:
    for idx in range(8):
      mapping_table[daytime][idx] = 0
  
  return mapping_table

def find_minimum(mapped):
  minimum = 999

  for key in mapped:
    for time in mapped[key]:
      if mapped[key][time] < minimum:
        minimum = mapped[key][time]

  return minimum

# mapped : 요일별로 해당하는 수업 개수 counting한 dictionary.
def construct_table(mapped):
  starttime_list = [9, 10.5, 12, 13.5, 15, 16.5, 18, 19.5]
  endtime_list = [10.25, 11.75, 13.25, 14.75, 16.25, 17.75, 19.25, 20.75]
  output_table = {
    '월':[],
    '화':[],
    '수':[],
    '목':[],
    '금':[]
  }

  # minimum 값을 가져온 후, 그 값에 해당하는 시간표만 mapping.
  minimum = find_minimum(mapped)

  for daytime in output_table:
    for idx in range(8):
      if mapped[daytime][idx] == minimum:
        output_table[daytime].append(f'{starttime_list[idx]}-{endtime_list[idx]}')

  return output_table

def first_person(data):
  time_map = time_mapping()
  mapped = counting_table(time_map, data)
  output = construct_table(mapped)

  return output

def filter_table(meets):
  output = counting_table()

  print(output)

  return output

  