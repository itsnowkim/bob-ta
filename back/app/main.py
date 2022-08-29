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
async def create_upload_file(file: UploadFile = File(...), username: str=''):
    # 유저의 시간표 read
    image = convertImgFormat.load_image_into_numpy_array(await file.read())
    timetable = exportImg.export_img(image)

    # 유저의 시간표 db에 저장
    unique_url = databaseModule.savedb(username, json.dumps(timetable, ensure_ascii=False))
    
    # 가능한 시간 찾기 함수
    output = management.first_person(timetable)

    return {"user_name": username, "output": output, "unique_url": unique_url}

# unique id로 get 요청 - 해당 url에 속하는 사람들의 교집합 return
@app.get("/meet/")
async def filter_timetable(id: str=''):
  # 겹치는 meet 가져오기
  meets = databaseModule.filter_meet(id)

  # 겹치는 시간대 전부 표시하는 알고리즘
  res = management.filter_table(meets)
  # return res
  return {"meets": res}

# 만들어진 방에 해당하는 userid 들의 시간표 return.
# input - string type unique id
# output - string.
# @app.get("/room/{unique_id}")
# def health_check(unique_id: str):
#   return {"unique_id" : unique_id}



# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}
