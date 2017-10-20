var express = require('express'),
    bodyParser = require ('body-parser'),
    db = require('./model/dataModel.js'),
    authenticate = require ('./routes/authenticate.js'),
    contactUs = require ('./routes/contactUsPost.js');
    var user = require('./routes/user.js');
    var chalk = require('chalk');  
    
    var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('./src/client/'));
app.use('/*',express.static('./src/client/index.html'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/authenticate',authenticate.auth );
app.post('/contact',contactUs.saveContactInfo);
app.post('/user',user.saveUser);

console.log(chalk.blue('Loading Server on Port ' + port));
app.listen(port,function(){
        console.log(chalk.green('Server is running on '+port));
    });
