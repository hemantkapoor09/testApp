var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/kapoorz_app';


    var container_no = req.body.container_no,
      date = req.body.date,
      time = req.body.time,
      art_no = req.body.art_no;
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});//con
var insertDocument = function(db, callback) {
   db.collection('containers').insertOne({container_no,date,time,art_no},function(err, result){
        assert.equal(err, null);
        console.log("Inserted a document into the containers collection.");
        callback();
      });
};//function insert