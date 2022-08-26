from typing import Union
from fastapi import FastAPI
import mymodule

app = FastAPI()

@app.post("/test")
def module_test():
    a = mymodule.checkDB()
    return {'a' : a}

@app.get("/health")
def health_check():
  return {"Server Working"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
