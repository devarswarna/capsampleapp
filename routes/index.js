var express = require('express');
var router = express.Router();
var db = require('../db');
var alert = require('alert');
const session = require('express-session');
router.get('/', function (req, res, next) {

  var sqlQuery = 'select * from users where user_email = ?';
  var values = req.session.email;
 // var uservalues=req.session.curl;
  db.query(sqlQuery, values, function (err, results, fields) {
 if(results != undefined)
 {
    console.log(results);
  
  //req.session.cusername = results[0].user_cloudusername;
  // console.log(req.session.cusername + "Session cloud username");
   req.session.cpwd = results[0].user_cloudpass;
   req.session.cname=results[0].user_client;
    //session.req.user_cloudusername=results[0].user_cloudusername;
 }
    res.render('index', {
      title: 'Welcome You have successfully Deployed the Application',
      authorised: req.session.authorised,
      fname: req.session.fname,
     
      email: req.session.email,
      cusername : req.session.cusername,
      cpwd: req.session.cpwd,
      cname:req.session.cname,
      users: results,
       uservalues : results,
    });
   console.log('Hello');
 
    console.log(values + "   Hellooooooooooo");
   // console.log(uservalues);
    //console.log(results[0].user_cloudusername+ "   cloud lab values");
  });

});

module.exports = router;