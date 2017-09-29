exports.auth = function(req,res){

var userName = req.body.userName;
var password = req.body.password;

if (userName === 'eswar' && password === '123')
{
  res.render('src/client/admin/admin.html');
}
else {
  res.render('src/client/login/login.html');
}};
