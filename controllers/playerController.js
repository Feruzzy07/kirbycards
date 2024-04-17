const {Player, Card, PlayerCards, Deck, DeckCards} = require('../models')
const souls = ['Kindness', 'Bravery'];

//view all
module.exports.viewAll = async function(req, res){
    const players = await Player.findAll();
    res.render('player/view_all', {players});
}

module.exports.DeckProfile = async function(req, res){
    const player = await Player.findByPk(req.params.id,{
        include: 'cards'
    });
    const deck = await Deck.findByPk(req.params.deckId, {
        include: 'cards'
    })
    const cards = await Card.findAll();
    res.render('/decks', {player});
}
//profile
module.exports.viewProfile = async function(req, res){
    const player = await Player.findByPk(req.params.id, {
        include: 'cards'
    });
    const cards = await Card.findAll();
    let availableCards = [];
    for (let i=0; i<cards.length; i++){
        if(!playerHasCard(player, cards[i])){
            availableCards.push(cards[i]);
        }
    }
    res.render('player/profile', {player, availableCards})
}

//render add
module.exports.renderAddForm = function(req, res){
    const player = {
        username: '',
        password: '',
        email: ''
    }
    res.render('player/add', {player});
}

//add
module.exports.addPlayer = async function(req, res){
    const player = await Player.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    res.redirect(`/players/profile/${player.id}`);
}

//render edit
module.exports.renderEditForm = async function(req, res){
    const player = await Player.findByPk(req.params.id);
    res.render('player/edit', {player});
}

//edit
module.exports.updatePlayer = async function(req,res){
    const player = await Player.update({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect(`/players/profile/${req.params.id}`, {player});
}

//delete
module.exports.deletePlayer = async function(req,res){
    await Player.destroy({
        where: {
            id:req.params.id
        }
    });
    res.redirect('/players');
}

//Add card to player
module.exports.enrollCard = async function(req, res){

    await PlayerCards.create({
        player_id: req.params.playerId,
        card_id: req.body.card
    })
    res.redirect(`/players/profile/${req.params.playerId}`);
}

//update soul
module.exports.updateSoul = async function(req, res){
    const deck = await Deck.update({
        soul: req.body.soul
    }, {
        where: {
            id: req.params.playerId
        }
    });
    res.redirect(`/decks/${req.params.playerId}`)
}

//add card to deck
module.exports.enrollCardtoDeck = async function(req, res){
    await Player.findByPk(req.params.id)
    await DeckCards.create({
        card_id: req.body.card,
        deck_id: req.params.deckId,
    });
    res.redirect(`/decks/`);
}

//profile
module.exports.viewProfileTest = async function(req, res){
    const deck = await Deck.findByPk(req.params.id, {
        include: 'cards'
    });
    const cards = await Card.findAll();
    res.render('decks/profile', {player, availableCards})
}



//Delete Card from Deck
module.exports.removeCardfromDeck = async function(req, res){
    await Player.findByPk(req.params.id, {
        where: {
            id: req.params.id
        }
    });
    await DeckCards.destroy({
        where: {
            deck_id: req.params.deckId,
            card_id: req.params.cardId
        }
    });
    res.redirect(`/decks`);
}




//Delete Card from player
module.exports.removeCard = async function(req, res){
    await PlayerCards.destroy({
        where: {
            player_id: req.params.playerId,
            card_id: req.params.cardId
        }
    });
    res.redirect(`/players/profile/${req.params.playerId}`);
}

function playerHasCard(player, card){
    for(let i=0; i<player.cards.length; i++){
        if(card.id === player.cards[i].id){
            return true
        }
    }
    return false
}

//render edit
module.exports.renderEditFormSetting = async function(req, res){
    const player = await Player.findByPk(req.params.id, {
        include: 'cards'
    });
    const cards = await Card.findAll();
    let availableCards = [];
    for (let i=0; i<cards.length; i++){
        if(!playerHasCard(player, cards[i])){
            availableCards.push(cards[i]);
        }
    }
    res.render('navbarprofile/settings', {player, availableCards})
}