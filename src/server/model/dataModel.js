var mongoose = require('mongoose');
var chalk = require('chalk');
var bcrypt = require('bcrypt-nodejs');

// Database connection

var db = 'mongodb://localhost/BrainHR';
mongoose.connect(db);

mongoose.connection.on('connected',function(){
  console.log(chalk.green('Database connected to '+db));
});
mongoose.connection.on('disconnected',function(){
  console.log(chalk.red('Database disconnected'));
});
mongoose.connection.on('error',function(){
  console.log(chalk.red('Cannot connect to database'));
});



// Schema's

var contactSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    message: String,
    date: {type: Date, default: Date.now}
});
module.exports = mongoose.model('info',contactSchema);

var userSchema = mongoose.Schema({
    name : String,
    userName: {type: String, unique:true},
    password: String,
    date: {type: Date, default: Date.now}
}
);


userSchema.methods.comparePwd = function(pwd,cb){
  bcrypt.compare(pwd,this.password,function(err,match){
    console.log(chalk.bgYellow(pwd));
    console.log(chalk.yellow(this.password));
    if(err){
      return cb(err)
    }
    cb(null,match);
  });
}
module.exports = mongoose.model('pass',userSchema);



var jobSchema = mongoose.Schema({

    title: String,
    keyWords: String,
    description: String
});
module.exprots =mongoose.model('job',jobSchema);