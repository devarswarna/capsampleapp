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
  
  
    //session.req.user_cloudusername=results[0].user_cloudusername;
 }
    res.render('index', {
      title: 'Welcome to SampleApp',
      authorised: req.session.authorised,
      fname: req.session.fname,
     
      email: req.session.email,
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