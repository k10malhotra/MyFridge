var mongoose = require('mongoose');
var foodPath = mongoose.model('Food');


module.exports.foodCreate = function (req, res) {
 sendJsonResponse(res, 200, {
 "status" : "success"
 });
 
};

var sendJsonResponse = function (res, status, content) {
 res.status(status);
 res.json(content);
};
 
 
 
module.exports.foodDetail = function (req, res) {
sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.foodReadone = function (req, res) { };
module.exports.foodUpdate = function (req, res) { };
module.exports.foodDelete = function (req, res) { };