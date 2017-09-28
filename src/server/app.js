var express = require('express'),
    bodyParser = require ('body-parser'),
    eswar = require ('./routes/authenticate.js');
var app = express();

var port = process.env.PORT || 5000;

console.log('Loading Port ' + port);
app.set('view engine', 'html');
app.use(express.static('./src/client/'));
app.use(express.static('./')); // not secure , allows access to all files.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/authenticate",eswar.auth );



app.listen(port,function(){
        console.log('server is running on '+port);
    });
