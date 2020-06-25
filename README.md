# memaudio

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/06410ab9e15045bd9327eb71e4d8ddf2)](https://app.codacy.com/manual/bamdadsabbagh/memaudio-www?utm_source=github.com&utm_medium=referral&utm_content=bamdadsabbagh/memaudio-www&utm_campaign=Badge_Grade_Dashboard)

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
docker run -d --name memaudio-www --restart=always -p 5OO7:80 docker.pkg.github.com/memaudio/memaudio-www/memaudio-www:latest
```
