# bob-ta backend

## run docker image
```bash
docker build -t myimage .

docker run -d --name mycontainer -p 80:80 myimage

docker run --rm -dp 80:80 --name bob-ta nowkimdocker/bob-ta:0.1
```

## mount volume in running container
```bash
docker commit {container_id} newimagename
docker run -ti -v {volume}:/somedir newimagename /bin/bash

docker run -dp 80:80 --name bob-ta -v /Users/nowkim/Dev/project/bob-ta/back:/code dev-bob-ta
```

