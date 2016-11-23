//Load express
var express = require("express");

//Create an instance of the express application
var app = express();
var routes = require("./routes");
var bodyParser = require("body-parser");
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
console.log(bodyParser.json);
app.use(bodyParser.json());

// Run functions in route.js
routes.init(app);
routes.errorHandler(app);

//Start the web server on port 3000
app.listen(PORT, function() {
    console.info("Web Server started on port 3000");
    console.info(__dirname);
});