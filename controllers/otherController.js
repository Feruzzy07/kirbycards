/*const {Player, Card, PlayerCards} = require("../models");

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

function playerHasCard(player, card){
    for(let i=0; i<player.cards.length; i++){
        if(card.id === player.cards[i].id){
            return true
        }
    }
    return false
}

const user = document.getElementById('user');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const email1 = document.getElementById('email');
const email2 = document.getElementById('emailconfirmation');

const AllUsers = [];
const AllPasswords = [];

submit.addEventListener('click', function(e){
    let goodinput = CheckValidity();
    if(goodinput === true){
        AllUsers.push[user.value];
        AllPasswords.push[password.value];
    }
});

function UserTaken(){
    for(let i=0; i<AllUsers.length; i++){
        if(AllUsers[i] === user.value){
            return 'Username is Already Taken'
        }else {
            return true
        }
    }
};
function EmailConfirmation(){
    if(email1.value === email2.value){
        return true
    }else{
        return 'The Confirmation Emails Do Not Match'
    }
}

function CheckValidity(){
    let function1 = EmailConfirmation();
    let function2 = UserTaken();
    if(function1 === true && function2 === true){
        return true
    }else{
        return 'Something went wrong!'
    }
}
*/