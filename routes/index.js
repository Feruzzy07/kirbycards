var express = require('express');
var router = express.Router();
//const cardController = require('../controllers/cardController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/signin', function(req, res){
  res.render('signin');
})
router.get('/register', function(req, res){
  res.render('register');
})
router.get('/crafting', function(req, res){
  res.render('crafting');
})
router.get('/staff', function(req, res){
  res.render('staff');
})
router.get('/legal', function(req, res){
  res.render('legal');
})
router.get('/mail', function(req, res){
  res.render('mail');
})


module.exports = router;
