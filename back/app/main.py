import json
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

# custom module
import exportImg, convertImgFormat, databaseModule, management

app = FastAPI()

origins = ["*"]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.get("/")
def health_check():
  return {"Server Working"}

# 처음 올릴 경우 - 가능한 시간대 + unique_url 리턴하면 됨.
@app.post("/uploadfile/")
async def create_meet(file: UploadFile = File(...), username: str=''):
    # 유저의 시간표 read
    image = convertImgFormat.load_image_into_numpy_array(await file.read())
    timetable = exportImg.export_img(image)
    
    # 유저의 시간표 db에 저장
    unique_url = databaseModule.savedb(username, json.dumps(timetable, ensure_ascii=False))
    
    # 가능한 시간 찾기 함수
    output = management.first_person(timetable)

    return {"user_name": username, "output": output, "unique_url": unique_url}

# unique id로 get 요청 - 해당 url에 속하는 사람들의 교집합 return
@app.post("/meet/")
async def add_timetable(id: str='',file: UploadFile = File(...), username: str=''):
  # 존재하는 url인지부터 확인
  meets = await databaseModule.filter_meet(id)
  
  if not meets:
    return {"error" : "해당하는 url이 존재하지 않습니다."}
  else:
    # 유저의 시간표 read
    image = convertImgFormat.load_image_into_numpy_array(await file.read())
    timetable = exportImg.export_img(image)
    
    # 유저의 시간표 받은 id에 해당하는 url로 db에 저장
    databaseModule.savedb(username, json.dumps(timetable, ensure_ascii=False), id)

    # 겹치는 meet 가져오기
    meets = await databaseModule.filter_meet(id)

    # 겹치는 시간대 전부 표시하는 알고리즘
    res = management.filter_table(meets)
    
    # return res
    return {"meets": res}

# unique id로 get 요청 - 해당 url에 속하는 사람들의 교집합 return
@app.get("/meet/")
async def filter_timetable(id: str=''):
  # 겹치는 meet 가져오기
  meets = await databaseModule.filter_meet(id)

  # 겹치는 시간대 전부 표시하는 알고리즘
  try:
    res, participants, minimum = management.filter_table(meets)
  except:
    return {"error" : "해당하는 url이 존재하지 않습니다."}
  
  # return res
  return {"meets": res, "participants": participants, "absent": minimum}
