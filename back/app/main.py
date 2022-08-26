import exportImg

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from io import BytesIO

import numpy as np

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

def load_image_into_numpy_array(data):
    return np.array(Image.open(BytesIO(data)))
# 시간표 이미지 전송
# input - img
# output - string, unique url
@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    image = load_image_into_numpy_array(await file.read())
    output = exportImg.export_img(image)

    return {"filename": file.filename, "output": output}

# @app.post("/test")
# def module_test():
#     a = mymodule.checkDB()
#     return {'a' : a}

# 만들어진 방에 해당하는 userid 들의 시간표 return.
# input - string type unique id
# output - string.
# @app.get("/room/{unique_id}")
# def health_check(unique_id: str):
#   return {"unique_id" : unique_id}



# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}
