const {Card, Player, Deck, DeckCards} = require('../models')
const rarities = ['Common', 'Rare', 'Epic', 'Legendary', 'DT'];
const souls = ['Kindness', 'Bravery', 'Determination'];

//View Renders
module.exports.index = function(req, res){
    res.render('index');
}
module.exports.signin = function(req, res){
    res.render('signin');
}
module.exports.register = function(req,res){
    res.render('register');
}
module.exports.staff = function(req, res){
    res.render('staff');
}
module.exports.legal = function(req, res){
    res.render('legal');
}
module.exports.mail = function(req, res){
    res.render('mail');
}
module.exports.decks = function(req, res){
    res.render('decks');
}
module.exports.friendship = function(req, res){
    res.render('friendship');
}
module.exports.hub = function(req, res){
    res.render('hub');
}
module.exports.packs = function(req, res){
    res.render('packs');
}
module.exports.allskins = function(req, res){
    res.render('navbarshop/allskins');
}
module.exports.yourshop = function(req, res){
    res.render('navbarshop/yourshop');
}
module.exports.cosmeticshop = function(req, res){
    res.render('navbarshop/cosmeticshop');
}
module.exports.ucp = function(req, res){
    res.render('navbarshop/ucp');
}
module.exports.profile = function(req, res){
    res.render('navbarprofile/profile');
}
module.exports.profiles = function(req, res){
    res.render('navbarprofile/profiles');
}
module.exports.history = function(req, res){
    res.render('navbarprofile/history');
}
module.exports.avatars = function(req, res){
    res.render('navbarprofile/avatars');
}
module.exports.cardskins = function(req, res){
    res.render('navbarprofile/cardskins');
}
module.exports.frameskins = function(req, res){
    res.render('navbarprofile/frameskins');
}
module.exports.settings = function(req, res){
    res.render('navbarprofile/settings');
}
module.exports.artifacts = function(req,res){
    res.render('navbarshop/artifacts');
}
module.exports.quests = function(req, res){
    res.render('quests');
}

//Card View All
module.exports.viewAll = async function(req, res, next){
    let searchRarities = ['All'];
    for(let i = 0; i<rarities.length; i++){
        searchRarities.push(rarities[i]);
    }
    let cards;
    let searchRarity = req.query.rarity || 'All';
    let searchRandom = req.query.random || false;
    if(searchRarity==='All'){
        cards = await Card.findAll();
    }else {
        cards = await Card.findAll({
            where: {
                rarity: searchRarity
            }
        });
    }
    if(rarities.length > 0 && searchRandom){
        let randomIndex = getRandomInt(rarities.length);
        cards = [rarities[randomIndex]];
    }
    res.render('crafting', {cards, rarities:searchRarities, searchRarity, searchRandom});
}
module.exports.viewDeck = async function(req,res){
    const players = await Player.findAll();
    res.render('decks1', {players});
}
//View All Deck
module.exports.viewAllDeck = async function(req, res, next){
    const player = await Player.findByPk(req.params.id,{
        include: 'cards'
    });
    const card = await Card.findByPk(req.params.id, {
        include: 'decks',
    });

    const deck = await Deck.findByPk(req.params.id, {
        include: 'cards',
    });
    const cards2 = await Card.findAll();
    let availableCards = [];
    for (let i=0; i<cards2.length; i++){
        if(playerHasCard(player, cards2[i])){
            availableCards.push(cards2[i]);
        }
    }

    let searchRarities = ['All'];
    for(let i = 0; i<rarities.length; i++){
        searchRarities.push(rarities[i]);
    }
    let cards;
    let searchRarity = req.query.rarity || 'All';
    let searchRandom = req.query.random || false;
    if(searchRarity==='All'){
        cards = await Card.findAll();
    }else {
        cards = await Card.findAll({
            where: {
                rarity: searchRarity
            }
        });
    }
    if(rarities.length > 0 && searchRandom){
        let randomIndex = getRandomInt(rarities.length);
        cards = [rarities[randomIndex]];
    }
    res.render('decks', {cards, availableCards, card, deck, souls, rarities:searchRarities, searchRarity, searchRandom, player});
}


function playerHasCard(player, card){
    for(let i=0; i<player.cards.length; i++){
        if(card.id === player.cards[i].id){
            return true
        }
    }
    return false
}

//Render Edit Form
module.exports.renderEditForm = async function(req, res, next){
    const card = await Card.findByPk(
        req.params.id
    );
    res.render('edit', {card, rarities});
}

//Update Card
module.exports.updateCard = async function(req, res){
    await Card.update(
        {
            name: req.body.name,
            cost: req.body.cost,
            cardimg: req.body.cardimg,
            stat1img: req.body.stat1img,
            stat2img: req.body.stat2img,
            stat3img: req.body.stat3img,
            tribe1img: req.body.tribe1img,
            tribe2img: req.body.tribe2img,
            description: req.body.description,
            dmg: req.body.dmg,
            rarityimg: req.body.rarityimg,
            hp: req.body.hp,
            rarity: req.body.rarity
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/crafting');
}

//Delete Card
module.exports.deleteCard = async function(req, res){
    await Card.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/crafting');
}

//Render Add Form
module.exports.renderAddForm = function(req, res){
    const card = {
        name: '',
        cost: 1,
        cardimg: '',
        stat1img: '',
        stat2img: '',
        stat3img: '',
        tribe1img: '',
        tribe2img: '',
        description: '',
        dmg: 1,
        rarityimg: '',
        hp: 1,
        rarity: rarities[0],
    };
    res.render('add', {card, rarities});
}

//Add Card
module.exports.addCard = async function(req, res){
    await Card.create(
        {
            name: req.body.name,
            cost: req.body.cost,
            cardimg: req.body.cardimg,
            stat1img: req.body.stat1img,
            stat2img: req.body.stat2img,
            stat3img: req.body.stat3img,
            tribe1img: req.body.tribe1img,
            tribe2img: req.body.tribe2img,
            description: req.body.description,
            dmg: req.body.dmg,
            rarityimg: req.body.rarityimg,
            hp: req.body.hp,
            rarity: req.body.rarity
        });
    res.redirect('/crafting');
}

//profile
module.exports.viewProfile = async function(req, res){
    const card = await Card.findByPk(req.params.id, {
        include: 'players',
    });
    res.render('profile', {card})
}

//Randomizer
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
//player has soul

function playerHasSoul(deck, soul){
    for(let i=0; i<souls.length; i++){
        if(deck.soul === souls[i]){
            return true
        }
    }
    return false
}