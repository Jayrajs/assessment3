var Sequelize = require("sequelize");
var config = require('./config');

var database = new Sequelize(
    config.mysql.database,
    config.mysql.username,

    config.mysql.password, {
        host:config.mysql.host,
        dialect:"mysql",
        pool:{
            max: 5,
            min: 0,
            idle:10000
        },
        force:false
    });

var GroceryModel = require('./api/grocery/grocery.model')(database);

database.sync()
    .then(function () {
        console.log("DB in sync")
    });

module.exports = {
    Grocery: GroceryModel
};

