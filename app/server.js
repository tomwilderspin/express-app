
var express = require('express');
var config = require('app/config');
var app = express();


//template engine

app.set("views", __dirname + '/view_templates');

app.set("view engine", "jade");

// app-wide services go here [logger, etc]


//register routes [with slim controller methods]

[
    'app/TwitterConnect/routes'
    //'app/Auth/routes'
].forEach(function (routePath) {
        require(routePath)(app);
    });


//error handles go here



//server process
app.listen(config.express.port, function(error) {

    if (error) {
        console.log('unable to listen for connections: %s', error.toString());
        process.exit(10);
    }

});


