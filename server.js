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
    var bookAPIObj = new BookAPI
    var str = ""
    req.on("data",function(chunck){
        str+= chunck;
    });
    req.on("end",function(){
        var convertedData = decodeURIComponent(str);
        try{
           var booksData = JSON.parse(convertedData); 
        }catch(err){
            console.log("catch")
            res.end("JOSN Data is not proper");
            return;
        }
        bookAPIObj.saveBook(booksData, function (data){
        res.end(JSON.stringify(data));
        });
    });
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
    var str = ""
    req.on("data",function(chunck){
        str+= chunck;
    });
    req.on("end",function(){
        var convertedData = decodeURIComponent(str);
        try{
           var userData = JSON.parse(convertedData); 
        }catch(err){
            console.log("catch")
            res.end("JOSN Data is not proper");
            return;
        }
        userAPIObj.saveUser(userData, function (data){
        res.end(JSON.stringify(data));
        })
    });
});

app.listen(process.env.PORT)
console.log('listening on port  no. ' + process.env.PORT +' ....');
