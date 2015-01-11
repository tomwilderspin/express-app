var requestClient = require('request');

function createEncodedCredentails(publicKey, privateKey)
{
    var concatenatedKeys = publicKey+':'+privateKey;

    return new Buffer(concatenatedKeys).toString('Base64');
}

function getToken(requestClient, credentials, callback)
{
    var options = {
        headers: {
            Authorization: 'Basic '+credentials,
            ContentType: 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        form: {
            grant_type: 'client_credentials'
        }
    };

    requestClient.post(
        'https://api.twitter.com/oauth2/token',
        options, function(error, response, body){

            var token = JSON.parse(body).access_token;

            callback(token);
        });
}


function setup(publicKey, privateKey, cb)
{
    var credentials = createEncodedCredentails(publicKey, privateKey);

    getToken(requestClient, credentials, cb);

}

module.exports = setup;