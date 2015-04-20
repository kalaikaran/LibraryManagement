var express = require('express'),
    app = express();

var mongoose = require('mongoose');
    conn = mongoose.connect('mongodb://'+process.env.IP+'/local');
    var BookAPI = require("./DAL/BookAPI");
var UserAPI = require("./DAL/UserAPI");
app.use(express.static(__dirname + ''));

app.get("/api/Books/:id",function(req, res){
    var bookAPIObj = new BookAPI();
    bookAPIObj.getBooks({"id":req.params.id}, function (data){
        res.end(JSON.stringify(data));
    })
    
});
app.get("/api/Books",function(req, res){
    var bookAPIObj = new BookAPI();
    bookAPIObj.getBooks({}, function (data){
        res.end(JSON.stringify(data));
    })
    
});
app.post("/api/Books",function(req, res){
    var bookAPIObj = new BookAPI();
    var booksData = {id: 2, name: 'The Little Prince',     author: 'Antoine', language: 'French', publishedOn: '1943'};
    bookAPIObj.saveBook(booksData, function (data){
        res.end(JSON.stringify(data));
    })
    
});

app.get("/api/users/:emailId",function(req, res){
    var userAPIObj = new UserAPI();
    userAPIObj.getUsers({"emailid":req.params.emailId}, function (data){
        res.end(JSON.stringify(data));
    })
    
});
app.get("/api/users",function(req, res){
    var userAPIObj = new UserAPI();
    userAPIObj.getUsers({}, function (data){
        res.end(JSON.stringify(data));
    })
    
});
app.post("/api/users",function(req, res){
    var userAPIObj = new UserAPI();
    var userData = {emailid:"a@a.com", pwd: "angular"};
    userAPIObj.saveUser(userData, function (data){
        res.end(JSON.stringify(data));
    })
    
});

app.listen(process.env.PORT)
console.log('listening on port  no. ' + process.env.PORT +' ....');
