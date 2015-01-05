FROM node:0.10-onbuild

WORKDIR /usr/src/app/node_modules

RUN ln -nsf ../app

WORKDIR /usr/src/app

EXPOSE 8888