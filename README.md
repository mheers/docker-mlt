# mlt

> The mlt framework https://www.mltframework.org/ as docker container

## Usage

```bash
docker run -it --rm mheers/mlt
```

## Build

```bash
cd ci/

export $(cat .env | xargs)
dagger call build-and-push-image --src ../ --registry-token=env:REGISTRY_ACCESS_TOKEN
```
