var mongoose = require('mongoose');
var user = mongoose.model('pass');
var chalk = require('chalk');



exports.auth = function(req,res)
{
  var userName = req.body.userName;
  var password = req.body.password;

  console.log(chalk.blue(password));

      user.findOne({userName:userName},function(err,userFound){
          console.log(chalk.blue(userFound));
        if(err){
          res.status(404).send("User Not Found");
        } else{
           userFound.comparePwd(password,function(err,isMatch){
             console.log(chalk.red(password));
             console.log(chalk.blue("inside compare pass"));
            if(isMatch && isMatch == true){
                console.log("authenticated");     
                res.status(200).send("authenticated");
            }
            else{
              console.log("unAuthenticated");
            }

           });
        }

      });
}
    
 





// exports.auth = function(req,res)
// {

// var userName = req.body.userName;
// var password = req.body.password;

// if (userName === 'eswar' && password === '123')
// {
//   console.log("authenticated");
//   res.send(200);
//   //res.render('src/client/admin/admin.html');
// }
// else {
//   console.log("Failed");
//   res.send(401);
//   //res.render('src/client/login/login.html');
// }};
