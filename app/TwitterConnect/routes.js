

function getFollowers(req, res) {

    res.send('you have 5 followers');

}

function setup(app) {
    app.get('/followers/:id', getFollowers());
}

module.exports = setup;