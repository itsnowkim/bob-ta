# bob-ta backend

## run docker image
```bash
docker build -t myimage .
docker build -t nowkimdocker/bob-ta:0.3 .

docker run --rm -dp 80:80 --name bob-ta nowkimdocker/bob-ta:0.4
```

## push image
docker push nowkimdocker/bob-ta:0.3

## mount volume in running container
```bash
docker commit {container_id} newimagename
docker run -ti -v {volume}:/somedir newimagename /bin/bash

docker run -dp 80:80 --name bob-ta -v /Users/nowkim/Dev/project/bob-ta/back:/code nowkimdocker/bob-ta:0.3
```

### check docker server

``` bash
# check docker
$ sudo systemctl status docker

# run docker
$ sudo systemctl start docker
```