

function getFollowers(req, res) {

    res.render('followers',{
        pageTitle:      'user followers',
        totalFollowers: 12
    });

}

function setup(app) {
    app.get('/followers/:id', getFollowers);
}

module.exports = setup;