
var getBearerToken = require('app/TwitterAPI/OAuth/getBearerToken');
var creds = {};

function getFollowers(req, res) {

    getBearerToken(creds.publicKey, creds.privateKey, function(token){

        res.render('followers', {
            pageTitle:      'user followers',
            totalFollowers: token
        });

    });

}

function setup(app, twitterKeys) {

    creds = twitterKeys;

    app.get('/followers/:id', getFollowers);
}

module.exports = setup;