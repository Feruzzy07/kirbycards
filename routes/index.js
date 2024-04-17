var express = require('express');
var router = express.Router();
const cardController = require('../controllers/cardController.js');
const playerController = require('../controllers/playerController.js');
const otherController = require('../controllers/otherController.js');

/* GET home page. */
router.get('/', cardController.index);
router.get('/signin', cardController.signin);
router.get('/register', cardController.register);
router.get('/staff', cardController.staff);
router.get('/legal', cardController.legal);
router.get('/mail', cardController.mail);
router.get('/artifacts', cardController.artifacts);
router.get('/friendship', cardController.friendship);
router.get('/hub', cardController.hub);
router.get('/packs', cardController.packs);
router.get('/allskins', cardController.allskins);
router.get('/yourshop', cardController.yourshop);
router.get('/cosmeticshop', cardController.cosmeticshop);
router.get('/ucp', cardController.ucp);
router.get('/profiles', cardController.profiles);
router.get('/history', cardController.history);
router.get('/avatars', cardController.avatars);
router.get('/cardskins', cardController.cardskins);
router.get('/frameskins', cardController.frameskins);
router.get('/settings', cardController.settings);
router.get('/quests', cardController.quests);


//Actual functionality *IE: Edit forms, randomizer, filter ect.
router.get('/crafting', cardController.viewAll);
router.get('/decks/:id', cardController.viewAllDeck);
router.get('/decks', cardController.viewDeck);
router.get('/edit/:id', cardController.renderEditForm);
router.post('/edit/:id', cardController.updateCard);
router.get('delete/:id', cardController.deleteCard);
router.get('/add', cardController.renderAddForm);
router.post('/add', cardController.addCard);
router.get('/cards/profile/:id', cardController.viewProfile);

//Player Controller
router.get('/players', playerController.viewAll);
router.get('/players/profile/:id', playerController.viewProfile);
router.get('/players/edit/:id', playerController.renderEditForm);
router.post('/players/edit/:id', playerController.updatePlayer);
router.get('/players/add', playerController.renderAddForm);
router.post('/players/add', playerController.addPlayer);
router.get('/players/delete/:id', playerController.deletePlayer);
router.post('/players/:playerId/enroll/', playerController.enrollCard);
router.post('/decks/:playerId/enroll/', playerController.updateSoul);
router.post('/decks/:deckId/add/', playerController.enrollCardtoDeck);
router.get('/decks/:deckId/removeCard/:cardId', playerController.removeCardfromDeck);
router.get('/players/:playerId/removeCard/:cardId', playerController.removeCard);

//Other Controller

module.exports = router;
