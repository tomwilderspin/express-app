
var getBearerToken = require('app/TwitterAPI/OAuth/getBearerToken');
var creds = {};
function getFollowers(req, res) {

    var accessToken = getBearerToken(creds.publicKey, creds.privateKey);

    res.render('followers',{
        pageTitle:      'user followers',
        totalFollowers: accessToken
    });

}

function setup(app, twitterKeys) {

    creds = twitterKeys;

    app.get('/followers/:id', getFollowers);
}

module.exports = setup;