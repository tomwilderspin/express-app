FROM node:0.10-onbuild

WORKDIR /usr/src/app/node_modules

RUN ln -nsf ../app

WORKDIR /usr/src/app

EXPOSE 8888

CMD NODE_PORT=$NODE_PORT TWIT_PRIVATE_KEY=$TWIT_PRIVATE_KEY TWIT_PUBLIC_KEY=$TWIT_PUBLIC_KEY npm start