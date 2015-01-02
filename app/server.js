

var express = require('express');
var app = express();


// app-wide utils go here [logging, etc]


//register routes [with slim controller methods]

[
    'app/TwitterConnect/routes'
    //'app/Auth/routes'
].forEach(function (routePath) {
        require(routePath)(app);
    });


//error handles go here



//server process
app.listen(8888, function(error) {

    if (error) {
        console.log('unable to listen for connections: %s', error.toString());
        process.exit(10);
    }

});


