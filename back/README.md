# Bob-ta backend

## Introduction

"밥타" 서비스는 에브리타임 시간표를 통해 사용자간의 빠른 약속 시간을 잡을 수 있도록 도와주는 서비스입니다.
서강대학교 수업시간을 기준으로 만들어졌으며, 모든 수업 시간은 1시간 15분, 쉬는 시간은 15분 단위를 가정하고 데이터 처리를 진행합니다.
정해진 시간표 이외에 사용자가 정각, 30분 단위의 개인 스케줄을 생성한 경우 해당 시간을 보정하는 알고리즘을 추가하였습니다.

>The "Bobta" service is a service that helps you schedule appointments quickly between users through the time schedule.
It is made based on Sogang University's class time, and all classes are processed by assuming an hour and 15 minutes of break time.
In addition to the fixed timetable, we added an algorithm to compensate for the time when the user created a personal schedule of 30 minutes.

## Udates
- [22.09.04] v1.0 released
- [22.09.16] `Readme.md` updated

## Build, push, run
```bash
# build image
docker build -t yourusername/bob-ta:1.0 .

# push docker image
docker push yourusername/bob-ta:1.0

# run container with docker compose
docker-compose up
```

## Tech Stack

<table><tbody>
 <tr>
  <td>
   <div align="center"><a href="https://www.docker.com/" target="_blank"> <img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" alt="docker" width="40" height="40"/> </a></div>
  </td>
  <td>
   <div align="center"><a href="https://fastapi.tiangolo.com/ko/" target="_blank"> <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="git" width="100" height="40"/> </a></div>
  </td>
  <td>
   <div align="center"><a href="https://opencv.org/" target="_blank"> <img src="https://opencv.org/wp-content/uploads/2022/05/logo.png" alt="git" width="40" height="40"/> </a></div>
  </td>
  <td>
   <div align="center"><a href="https://developers.notion.com/reference/intro" target="_blank"> <img src="https://files.readme.io/a267aac-notion-devs-logo.svg" alt="git" width="150" height="40"/> </a></div>
  </td>
 </tr>
  <tr>
    <td align = "center">Docker</td>
    <td align = "center">FastAPI</td>
    <td align = "center">OpenCV</td>
    <td align = "center">Notion API</td>
  </tr>
</tbody></table>

## Architecture

![Diagram_Image](/readme_imgs/diagram.png)
