import requests
from dotenv import load_dotenv
import os
import json
import uuid

def init():
    # load .env
    load_dotenv()

    database_id = os.environ.get('DATABASE_ID')
    token=os.environ.get('TOKEN')

    headers = {
        "Authorization": f"{token}",
        "Notion-Version": "2021-05-11",
        "Content-Type": "application/json"
    }

    return headers, database_id

def build_payload(database_id, username, data, id=''):

  if id != '':
    unique_url = id
  else:
    unique_url = str(uuid.uuid4())

  payload = {
  "parent": {
    "database_id": database_id
  },
  "properties": {
    "name": {
      "title": [
        {
          "text": {
            "content": username
          }
        }
      ]
    },
    "user_id": {
      "rich_text": [
        {
          "text": {
            "content": str(uuid.uuid4())
          }
        }
      ]
    },
    "unique_url": {
      "rich_text": [
        {
          "text": {
            "content": unique_url
          }
        }
      ]
    },
    "timetable": {
      "rich_text": [
        {
          "text": {
            "content": data
          }
        }
      ]
    }
  }}

  return payload, unique_url

def savedb(username, data, id=''):
    # add new username and unique id to notion page
    url = f'https://api.notion.com/v1/pages'
    headers, database_id = init()
    payload, unique_url = build_payload(database_id, username, data, id)

    response = requests.post(url, headers=headers, data=json.dumps(payload))

    return unique_url
    
async def filter_meet(id):
  headers, database_id = init()
  url = f"https://api.notion.com/v1/databases/{database_id}/query"
  payload = {
    "filter": {
        "property": "unique_url",
        "rich_text": {
            "equals": id
        }
    }
  }
  res = requests.post(url, json=payload, headers=headers)

  meet = {}
  for person in res.json()["results"]:
    key = person["properties"]["name"]["title"][0]["plain_text"]
    value = json.loads(person["properties"]["timetable"]["rich_text"][0]["plain_text"])
    meet[key] = value

  return meet