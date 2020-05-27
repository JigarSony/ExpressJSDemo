var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/contact', function(req, res, next) {
  //console.log(req.body);
  var a = req.body.txtname;
  res.render('resp', { msg : a });
});

router.get('/jigar', function(req, res, next) {
  res.send('Hey I am Jigar');
});

module.exports = router;
