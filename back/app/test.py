import requests

database_id = '10337c1699f8459594ef6bcfdb4d1268'
token='secret_MhZs10ptaLLhyZsUp9SnuZIWjd8MS9e9ihhunnTQpII'
url = f"https://api.notion.com/v1/databases/{database_id}/"
print(url)

headers = {
    "Authorization": f"{token}",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json"
}
response = requests.get(url, headers=headers)
print(response.text)