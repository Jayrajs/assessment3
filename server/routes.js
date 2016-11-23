'use strict';

var express = require("express");
var path = require("path");
var GroceryController = require("./api/grocery/grocery.controller");

const CLIENT_FOLDER = path.join(__dirname + '/../public');

module.exports = {
    init: configureRoutes,
    errorHandler: errorHandler
};

function configureRoutes(app){

    app.get("/api/products", GroceryController.list);
    app.get("/api/products/:productId", GroceryController.show);
    app.put("/api/products/:productId", GroceryController.update);
    app.delete("/api/products/:productId", GroceryController.delete);

    app.use(express.static(CLIENT_FOLDER));

}

function errorHandler(app) {
    app.use(function (req, res) {
        res.status(401).sendFile(CLIENT_FOLDER + "/app/errors/404.html");
    });

    app.use(function (err, req, res, next) {
        res.status(500).sendFile(path.join(CLIENT_FOLDER + '/app/errors/500.html'));
    });
};

