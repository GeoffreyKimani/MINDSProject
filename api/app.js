var express = require("express");
var bodyParser = require("body-parser");
const cors = require('cors');
var routes = require("./routes/routes.js");

// Create app
var app = express();

// specify port to run the app
const PORT = process.env.PORT || 8080;

// Add parser before specifying the route
app.use(bodyParser.json());

// Enable CORS for specific origins
const allowedOrigins = ['https://africa-leaders.onrender.com'];
app.use(cors({
  origin: allowedOrigins
}));

// specify router entry
app.use('/', routes)


var server = app.listen(PORT, function () {
    console.log("App running on port: ", server.address().port);
});