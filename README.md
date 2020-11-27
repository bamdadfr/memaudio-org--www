#

<p align=center>
    <font size=10>
        <a href="https://memaudio.org/">
            Memaudio
        </a>
    </font>
</p>

<p align=center>
    Web based audio memory (proof of concept)
</p>

<p align=center>
    <font size=4>
        <b>
            ⚠️
            <u>
                unmaintained
            </u>
        </b>
    </font>
</p>

## state

latest working version is `v1.0.121`

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
docker run -d --name memaudio-www --restart=always -p 5007:80 docker.pkg.github.com/memaudio/memaudio-www/memaudio-www:v1.0.121
```
