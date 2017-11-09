var express = require("express");
var router = express.Router();
// Import the model (cat.js) to use its database functions.
var stock = require("../models/stock.js");
// var bodyParser = require('body-parser');
var app = express();
// var methodOverride = require('method-override');
// Create all our routes and set up logic within those routes where required.
// router.get('/', function(req, res){
// 	res.redirect('/stock');
// });

router.get("/", function(req, res) {
  stock.all(function(data) {
    var hbsObject = {
      stock: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/create", function(req, res) {
  stock.create([
    "item_name", "category", "storage", "include"
  ], [
    req.body.name, req.body.cat, req.body.place, 0
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect('/');
  });
});

router.put("/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  stock.update({
    'include': 1
  }, condition, function(result) {

      
      res.redirect('/');
       
  });
});

router.put("/return/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  stock.update({
    'include': 0
  }, condition, function(result) {

      // res.status(200).end();
      res.redirect('/');
       
  });
});

router.delete("/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  stock.delete(condition, function(result) {
    
      res.redirect('/');
       
  });
});
// Export routes for server.js to use.
module.exports = router;