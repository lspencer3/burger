var burgers = require("../models/burger.js");
var express = require("express");

module.exports = function (app){

app.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

app.post("/burgers/add", function(req, res) {
	console.log(req.body.newBurger)
  burgers.insertOne(["burger_name"],[req.body.newBurger], function(data) {
    res.json({id: data.id});
  });
});

app.put("/burgers/:id", function(req, res){
	console.log(req.params.id)
	var id = req.params.id
	var update = req.body.devoured
	console.log(id,update)
	burgers.updateOne("devoured", update, "id", id, function(result){
			if (result.changedRows == 0) {
	      		// If no rows were changed, then the ID must not exist, so 404
	      		return res.status(404).end();
	    	} 
	    	else {
	      		res.json({id: data.id});
	    	}

		})
	})

};


