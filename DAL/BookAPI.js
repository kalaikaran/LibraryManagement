
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var Books = new Schema({
        id: Number,
        name: String, 
        author: String, 
        language: String, 
        publishedOn: String
    });
var MyModel = conn.model('books', Books,'books');

function BookAPI(){
    return this;
}

BookAPI.prototype.saveBook = function (bookObj , callback){
    
/*    MongoClient.connect(this.url, function(err, db) {
        var collection = db.collection('books');
  assert.equal(null, err);
  console.log("Connected correctly to server");
  collection.find({}).toArray(function(err, docs) {
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
  });
    });*/
  //  var MyModel = mongoose.model('Books', this.Books);
    var book = new MyModel(bookObj);
    book.save(function(err, data){
        if (err){
            console.log(err);
        } else{
            callback(bookObj);
        }
    });
}
BookAPI.prototype.getBooks = function (bookObj,callBack){
    //var MyModel = mongoose.model('books', this.Books);
    //var book = new MyModel(book);
    bookObj = bookObj ? bookObj :{};
    MyModel.find(bookObj, function(err, data){
        if (err){
            console.log(err);
        } else{
            callBack(data);
            console.log(this.conn);
            //conn.close();
        }
    });
}
module.exports = BookAPI;