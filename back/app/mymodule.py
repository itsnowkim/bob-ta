import requests

def checkDB():
  database_id = '10337c1699f8459594ef6bcfdb4d1268'
  url = f"https://api.notion.com/v1/databases/{database_id}/query"
  
  print(url)

  payload = {"page_size": 100}
  headers = {
      "Accept": "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json"
  }
  response = requests.post(url, json=payload, headers=headers)
  print(response.text)

def greeting(name):
  return("Hello, " + name)
  