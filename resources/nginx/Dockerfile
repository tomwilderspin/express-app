FROM nginx:1.7

MAINTAINER Tom Wilderspin [tom@flashtalking.com]

RUN mkdir -p /srv/http

ADD nginx.conf /etc/nginx/

ADD node.conf /etc/nginx/conf.d/

VOLUME /srv/http