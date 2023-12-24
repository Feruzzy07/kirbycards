var express = require('express');
var router = express.Router();
//const cardController = require('../controllers/cardController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crafting');
});
router.post('/signin', function(req, res){
  res.render('signin');
})

module.exports = router;
