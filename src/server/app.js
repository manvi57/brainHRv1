var express = require('express'),
    bodyParser = require ('body-parser'),
    eswar = require ('./routes/authenticate.js');
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('./src/client/'));
app.use('/*',express.static('./src/client/index.html'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/authenticate',eswar.auth );

console.log('Loading Port ' + port);
app.listen(port,function(){
        console.log('server is running on '+port);
    });
