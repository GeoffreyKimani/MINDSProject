var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");

// Create app
var app = express();

// specify port to run the app
const PORT = process.env.PORT || 8080;

// Add parser before specifying the route
app.use(bodyParser.json());

// specify router entry
app.use('/', routes)


var server = app.listen(PORT, function () {
    console.log("App running on port: ", server.address().port);
});