var mongoose = require('mongoose');
var chalk = require('chalk');

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
  console.log(chalk.red(error));
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
    userName: String,
    password: String,
    date: {type: Date, default: Date.now}
}
);
module.exports = mongoose.model('pass',userSchema);

