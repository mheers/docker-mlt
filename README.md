# mlt

> The melt/mlt framework https://www.mltframework.org/ as docker container with many fonts.

## Usage

```bash
docker run -it --rm mheers/melt:v7.28.0
```

## Build

```bash
cd ci/

export $(cat .env | xargs)
dagger call build-and-push-image --src ../ --registry-token=env:REGISTRY_ACCESS_TOKEN
```
