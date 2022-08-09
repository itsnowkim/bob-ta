from typing import Union
from fastapi import FastAPI
import mymodule

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/test")
def test(name):
    a = mymodule.greeting(name)
    return {'a' : a}

@app.get("/health")
def health_check():
  return {"Server Working"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
