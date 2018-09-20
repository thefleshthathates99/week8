var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { id: 001, name: 'Thundefury, Blessed Blade of the Windseeker', price: "2'500'000g", type: 'One-Handed Legendary Sword', description: "Binds when picked up - Unique - One-Hand	Sword - 16 - 28 Damage	Speed 2.60 - (8.65 damage per sec) - Chance on hit: Blasts your enemy with lightning, dealing 46 Nature damage and then jumping to additional nearby enemies.  Each jump reduces that victim's Nature resistance by 4. Affects 5 targets. Your primary target is also consumed by a cyclone, slowing its attack speed by 20% for 12 sec. - Requires Level 60 - Sell Price: 11g 51s 5c"},
    { id: 002, name: 'Battetoads', price: 'Unknown', type: 'Rare Video Game', description: 'A rare video game from the old days. used as a prank against game retailers, as it is the hardest game in the universe'},
    { id: 003, name: 'Rare Space Pepe', price: "$1'000'000'000", type: 'Dank Meme', description: 'A rare pepe only seen by 2 people; Jesus and Ghandi'},
  ];
  dbo.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
