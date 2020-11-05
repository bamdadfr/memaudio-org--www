# memaudio

[![version](https://img.shields.io/github/v/release/memaudio/memaudio-www)](#-memaudio)

[![codacy](https://api.codacy.com/project/badge/Grade/06410ab9e15045bd9327eb71e4d8ddf2)](#-memaudio)

[![dependencies](https://img.shields.io/david/memaudio/memaudio-www)](#-memaudio) [![snyk](https://img.shields.io/snyk/vulnerabilities/github/memaudio/memaudio-www)](#-memaudio)

Web based audio memory (POC)

<https://memaudio.org/>

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
# local dev image
docker run -d --name memaudio-www --restart=always -p 5007:80 memaudio-www-dev

# production image
docker run -d --name memaudio-www --restart=always -p 5007:80 docker.pkg.github.com/memaudio/memaudio-www/memaudio-www:latest
```
