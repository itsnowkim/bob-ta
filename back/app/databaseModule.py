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

    print(database_id, token)

    headers = {
        "Authorization": f"{token}",
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json"
    }
    
    url = f'https://api.notion.com/v1/pages'

    return url, headers, database_id

def build_payload(database_id, username, data):

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

def savedb(username, data):
    # add new username and unique id to notion page
    url, headers, database_id = init()
    payload, unique_url = build_payload(database_id, username, data)

    response = requests.post(url, headers=headers, data=json.dumps(payload))

    print(response.text)

    return unique_url
    
    
