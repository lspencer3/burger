var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res){
    	cb(res)
    });
  },
  insertOne: function(col, val, cb) {
    orm.insertOne("burgers", col, val, function(res) {
      cb(res);
    });
  },
  updateOne: function(col1, val1, col2, val2) {
    orm.updateOne("burgers", col1, val1, col2, val2, function(res) {
      cb(res);
    });
  }/*,
  delete: function(condition, cb) {
    orm.delete("cats", condition, function(res) {
      cb(res);
    });
  }*/
};


module.exports = burgers;