var express = require('express');
var router = express.Router();
const cardController = require('../controllers/cardController');

/* GET home page. */
router.get('/', cardController.index);
router.get('/signin', cardController.signin);
router.get('/register', cardController.register);
router.get('/staff', cardController.staff);
router.get('/legal', cardController.legal);
router.get('/mail', cardController.mail);
router.get('/crafting', cardController.viewAll);

module.exports = router;
