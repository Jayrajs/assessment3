var Sequelize = require("sequelize");

module.exports = function (database) {

    var Grocery = database.define("grocery_list", {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        upc12: {
            type: Sequelize.INTEGER
        },
        brand: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        }
    },{
        freezeTableName: true,
        timestamps:false
    });

    return Grocery;

};