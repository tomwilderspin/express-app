
var getBearerToken = require('app/TwitterAPI/OAuth/getBearerToken');

function getFollowers(req, res) {

    var accessToken = getBearerToken();

    res.render('followers',{
        pageTitle:      'user followers',
        totalFollowers: 12
    });

}

function setup(app) {
    app.get('/followers/:id', getFollowers);
}

module.exports = setup;