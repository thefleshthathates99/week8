var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name: 'Rare Space Pepe' };
  dbo.collection("products").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted, though you probably shoudln't have...");
    db.close();
  });
});
