var mongoose = require('mongoose');
//mongoose.connect('mongodb://'+process.env.IP+'/local');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var users = new Schema({
        emailid: String,
        pwd: String
    });
var MyModel = conn.model('users', users,'users');
function UserAPI(){
    return this;
}
UserAPI.prototype.saveUser = function (userObj , callback){
    var user = new MyModel(userObj);
    user.save(function(err, data){
        if (err){
            console.log(err);
        } else{
            callback(userObj);
        }
    });
}
UserAPI.prototype.getUsers = function (userObj,callBack){
    userObj = userObj ? userObj :{};
    MyModel.find(userObj, function(err, data){
        if (err){
            console.log(err);
        } else{
            callBack(data);
        }
    });
}
module.exports = UserAPI;