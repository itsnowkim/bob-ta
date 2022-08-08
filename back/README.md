# bob-ta backend

## run docker image
```bash
docker build -t myimage .

docker run -d --name mycontainer -p 80:80 myimage

docker run --rm -dp 80:80 --name bob-ta nowkimdocker/bob-ta:0.1
```
