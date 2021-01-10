// Import models connection.
var express = require("express");
var router = express.Router();

//IMPORT THE MODEL (burger.js) to use its database function
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers:id", function(req, res) {
  console.log("YOU POSTED A BURGER: ", req.body)
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, 0
  ], function(result) {
    res.redirect({ id: result.insertId});
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devour
  }, condition, function(result) {
    if (result.changedRows == 0) {
        return res.status(404).end();
  } else { 
      res.status(200).end();
  }
  });
});

// Export routes for server.js to use.
module.exports = router;
