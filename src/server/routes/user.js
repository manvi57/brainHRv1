var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var user = mongoose.model('pass');

exports.saveUser = function(req,res){

    var newUser = new user();
    // hashing the password
    var hash = bcrypt.hashSync(req.body.password);

    newUser.userName = req.body.userName;
    newUser.password = hash;

        newUser.save(function(err,user){
            if(err){
                res.send(err);
            }
            else{
                res.send(201,user);
            }
        });
}

exports.initUser = function(){

    var initUser = new user();
    // hashing the password
    var hash = bcrypt.hashSync('password');

    initUser.userName = 'admin@brainhr.com';
    initUser.password = hash;

        initUser.save(function(err,user){
            if(err){
                console.log(err);
            }
            else{
                console.log(user);
            }
        });
}
