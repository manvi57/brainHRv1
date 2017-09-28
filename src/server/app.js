var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

console.log('Loading Port ' + port);

app.use(express.static('./src/client/'));
app.use(express.static('./'));

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
