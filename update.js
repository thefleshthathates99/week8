var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name: "Thundefury, Blessed Blade of the Windseeker" };
  var newvalues = { $set: {name: "Thundefury, Blessed Blade of the TradeChat Trollers", price: "10g", description: "Frequently spammed in Trade Chat by a bunch of twats" } };
  dbo.collection("products").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
