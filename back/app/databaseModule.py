import requests
from dotenv import load_dotenv
import os

def init():
    # load .env
    load_dotenv()

    database_id = os.environ.get('DATABASE_ID')
    token=os.environ.get('TOKEN')

    return database_id, token

def get_database():
    database_id, token = init()

    print(database_id, token)

    url = f"https://api.notion.com/v1/databases/{database_id}/"

    headers = {
        "Authorization": f"{token}",
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json"
    }
    response = requests.get(url, headers=headers)
    print(response.text)