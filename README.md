# memaudio

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/06410ab9e15045bd9327eb71e4d8ddf2)](https://app.codacy.com/manual/bamdadsabbagh/memaudio-www?utm_source=github.com&utm_medium=referral&utm_content=bamdadsabbagh/memaudio-www&utm_campaign=Badge_Grade_Dashboard)
![Docker Image Size (tag)](https://img.shields.io/docker/image-size/bamdadsabbagh/memaudio-www/latest)
![Docker Pulls](https://img.shields.io/docker/pulls/bamdadsabbagh/memaudio-www)

Web based audio memory (POC)

<https://memaudio.org/>

[docker hub](https://hub.docker.com/r/bamdadsabbagh/memaudio-www)

## local dev

```bash
git clone https://github.com/bamdadsabbagh/memaudio-www.git
cd memaudio-www
yarn install

# http://localhost:3000/
yarn start
```

## docker

### local build

```bash
docker build -t memaudio-www-dev .
```

### run

```bash
# http://localhost:8080/

# local dev image
docker run -d --name memaudio-www --restart=always -p 8080:80 memaudio-www-dev

# production image
docker run -d --name memaudio-www --restart=always -p 8080:80 bamdadsabbagh/memaudio-www:latest
```
