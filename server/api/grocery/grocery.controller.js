var Grocery = require("../../database").Grocery;

exports.list = function(req,res){
    var whereCondition = {};
    var limit = req.query.limit || 20;
    var offset = req.query.offset || 0;
    var brand = '';
    var name = '';

    console.log(req.query.searchType);

    if((typeof req.query.searchType !== 'undefined')) {
        if(typeof req.query.searchType === 'string'){
            if(req.query.searchType=='Brand') {
                brand = req.query.keyword;
            }
            if(req.query.searchType=='Name') {
                name = req.query.keyword;
            }
        } else {
            brand = req.query.keyword;
            name = req.query.keyword;
        }
    }

    if(brand && name) {
        whereCondition = {
            where: {
                brand: {
                    $like: "%" + brand + "%"
                },
                name: {
                    $like: "%" + name + "%"
                }
            },
            limit: limit
        }
    } else {
        if(brand) {
            whereCondition = {
                where: {
                    brand: {
                        $like: "%" + brand + "%"
                    }
                },
                limit: limit
            }
        }
        else if(name) {
            whereCondition = {
                where: {
                    name: {
                        $like: "%" + name + "%"
                    }
                },
                limit: limit
            }
        }
        else {
            whereCondition = {
                limit: limit
            }
        }
    }

    Grocery
        .findAll(whereCondition)
        .then(function (result) {
            if (result) {
                console.log(result);
                res.json(result);
            } else {
                res.status(400).send(JSON.stringify("Record Not Found"));
            }
        });
};

exports.show = function(req,res){
    Grocery
        .findOne({
            where: {
                id: Number(req.params.productId)
            }
        })
        .then(function(result){
            if (result) {
                console.log(result);
                res.json(result);
            } else {
                res.status(400).send(JSON.stringify("Record Not Found"));
            }
        });
};

exports.update = function(req,res){
    Grocery
        .find({
            where: {
                id: Number(req.params.productId)
            }
        })
        .then(function(result){
            result.updateAttributes({
                upc12: req.body.upc12,
                brand: req.body.brand,
                name: req.body.name
            }).then(function (){
                console.log("update done");
                res.status(200).end();
            }).catch(function (){
                console.log("update failed");
                res
                    .status(500)
                    .json({error: true, errorText: "Update Failed"})
            });
        })
        .catch(function(err){
            console.log("err", err);
            res
                .status(500)
                .json({error: true, errorText: "Record not found"})
        });

};

exports.delete = function(req,res){
    Grocery
        .destroy({
            where: {
                id: req.params.productId
            }

        })
        .then(function(result) {
            console.log("deleted");
            res
                .status(200)
                .json(result)
        })
        .catch(function(err){
            console.log("err", err);
            res
                .status(500)
                .json({error: true})
        })

};
