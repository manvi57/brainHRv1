exports.auth = function(req,res){

var userName = req.body.userName;
var password = req.body.password;

if (userName === 'eswar' && password === '123')
{
  console.log("authenticated");
  //res.render('src/client/admin/admin.html');
}
else {
  console.log("Failed")
  //res.render('src/client/login/login.html');
}};
