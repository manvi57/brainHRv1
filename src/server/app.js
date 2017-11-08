var express = require('express'),
    bodyParser = require ('body-parser'),
    chalk = require('chalk');
var app = express();
  /*db = require('./model/dataModel.js'),
    authenticate = require ('./routes/authenticate.js'),
    contactUs = require ('./routes/contactUsPost.js');
    var user = require('./routes/user.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/authenticate',authenticate.auth );
app.post('/contact',contactUs.saveContactInfo);
app.post('/user',user.saveUser);

user.initUser();
*/

var port = process.env.PORT || 5000;

app.use(express.static('./src/client/'));
app.use('/*',express.static('./src/client/index.html'));

console.log(chalk.blue('Loading Server on Port ' + port));
app.listen(port,function(){
        console.log(chalk.green('Server is running on '+port));
    });
