# bob-ta backend

## run docker image
```bash
docker build -t myimage .
docker build -t nowkimdocker/bob-ta:0.7 .
# docker build --no-cache --progress=plain --secret id=_env,src=.env -t nowkimdocker/bob-ta:0.6 .
# docker build --no-cache --progress=plain --secret id=mysecret,src=mysecret.txt -t nowkimdocker/bob-ta:0.7 .

docker run --rm -dp 80:80 nowkimdocker/bob-ta:0.7
```

## push image
docker push nowkimdocker/bob-ta:0.5

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