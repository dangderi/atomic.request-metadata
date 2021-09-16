FROM registry.redhat.io/ubi8/nodejs-14

USER 0

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000
ENTRYPOINT [ "node", "dist/server.js" ]
