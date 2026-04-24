# LUR

Escaparate web corporativo para Lur Uribarren, guia de montana.

## Desarrollo

```bash
docker compose up lur-web
```

Disponible en `http://localhost:5173`.

## Produccion

```bash
docker compose up lur-web-prod --build
```

Disponible en `http://localhost:8080`.

## Red y proxy

Si el build falla por timeout contra npm, puedes pasar un registro o proxy al build:

```bash
NPM_REGISTRY=https://registry.npmjs.org/ docker compose build lur-web
```

```bash
HTTPS_PROXY=http://tu-proxy:puerto HTTP_PROXY=http://tu-proxy:puerto docker compose build lur-web
```

Con tu proxy actual, `docker-compose` ya admite estas variables:

```bash
HTTP_PROXY_URL=http://proxycloud.eitb.lan:80
HTTPS_PROXY_URL=http://proxycloud.eitb.lan:80
NO_PROXY=127.0.0.1,localhost,10.0.0.0/8,172.,.etb,.lan
```

Ejemplo:

```bash
HTTP_PROXY_URL=http://proxycloud.eitb.lan:80 \
HTTPS_PROXY_URL=http://proxycloud.eitb.lan:80 \
NO_PROXY=127.0.0.1,localhost,10.0.0.0/8,172.,.etb,.lan \
docker compose build lur-web
```

La imagen de desarrollo incorpora la CA corporativa `ZscalerRootCertificate-2048-SHA256.crt` para que Alpine y npm confien en el proxy interceptando TLS.

La imagen de produccion no usa proxy corporativo ni instala la CA de Zscaler. Esta pensada para correr en una maquina limpia con salida normal a internet.

Si quieres evitar escribir variables cada vez:

```bash
cp .env.example .env
docker compose build lur-web
```

## Stack

- Vite
- React
- Docker Compose
