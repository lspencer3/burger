var connection = require("./connection.js")

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err){
      	throw err;
      }
      cb(result)
    });
  },
  insertOne: function(table, cols, val, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [table, cols, val], function(err, result) {
    	if (err){
    		console.log(err)
    	}
    	else{
      		cb(result);
      	}
    });
  },
  updateOne: function(table, col1, val1, col2, val2, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

    connection.query(queryString, [table, col1, val1, col2, val2], function(err, result) {
    	if (err){
    		throw err
    	}
      	else{
      		cb(result);
      	}
    });
  },
  deleteOne: function(table, col, val, cb) {
  	var queryString = "DELETE FROM ?? WHERE ?? = ?";
  	connection.query(queryString, [table, col, val], function(err, result){
  		if (err){
  			throw err
  		}
  		else{
  			cb(result)
  		}
  	})
  }
};

module.exports = orm;
