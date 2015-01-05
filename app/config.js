var config = module.exports;

var config_auth = require('app/config_auth');

config.express = {
    port: 8888
};

config.twitter = config_auth.twitter;


