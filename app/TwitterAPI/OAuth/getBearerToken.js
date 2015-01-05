var requestClient = require('request');

function createEncodedCredentails(publicKey, privateKey)
{
    var concatenatedKeys = publicKey+':'+privateKey;

    return new Buffer(concatenatedKeys).toString('Base64');
}

function getToken(requestClient, credentials)
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

    var token = requestClient.post(
        'https://api.twitter.com/oauth2/token',
        options,
        function(error, res, body){
            var responseBody = JSON.parse(body);
            return responseBody.access_token;
        });

    return token;
}

function setup(publicKey, privateKey)
{
    var credentials = createEncodedCredentails(publicKey, privateKey);

    return getToken(requestClient, credentials);

}

module.exports = setup;