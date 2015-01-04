var config = module.exports;

config.express = {
    port: process.env.NODE_PORT
};

config.twitter = {
    publicKey:  process.env.TWIT_PUBLIC_KEY,
    privateKey: process.env.TWIT_PRIVATE_KEY
};


