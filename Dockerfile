FROM node:20-alpine

WORKDIR /app

ARG NPM_REGISTRY=https://registry.npmjs.org/
ARG HTTP_PROXY
ARG HTTPS_PROXY
ARG NO_PROXY

ENV HTTP_PROXY=${HTTP_PROXY}
ENV HTTPS_PROXY=${HTTPS_PROXY}
ENV NO_PROXY=${NO_PROXY}
ENV http_proxy=${HTTP_PROXY}
ENV https_proxy=${HTTPS_PROXY}
ENV no_proxy=${NO_PROXY}

COPY ZscalerRootCertificate-2048-SHA256.crt /usr/local/share/ca-certificates/zscaler-root.crt

ENV npm_config_registry=${NPM_REGISTRY}
ENV npm_config_proxy=${HTTP_PROXY}
ENV npm_config_https_proxy=${HTTPS_PROXY}
ENV npm_config_cafile=/usr/local/share/ca-certificates/zscaler-root.crt
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/zscaler-root.crt
ENV npm_config_fetch_retries=5
ENV npm_config_fetch_retry_mintimeout=20000
ENV npm_config_fetch_retry_maxtimeout=120000
ENV npm_config_fetch_timeout=300000
ENV npm_config_audit=false
ENV npm_config_fund=false

COPY package*.json ./
RUN npm install --prefer-online

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
