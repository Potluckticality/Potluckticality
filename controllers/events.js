var Event = require('../models/event');
var User = require('../models/user');

function allDishes(req, res) {
    Event.findById(req.params.id, function(err, event) {
        res.render('events/events', {event, dishes: event.dishes});
    });
}

function newDish(req, res) {
    Event.findById(req.params.id, function(err, event) {
        console.log(req.body.dish)
        event.dishes.push({dish: req.body.dish, userName:req.user.firstName, dishId:req.user.id});  
        event.save(function(err) {
            console.log('dishes', event.dishes)
            res.redirect('/');
        });
    });
}

function deleteDish(req, res) {
    Event.findById(req.params.id, function(err, event) {
        event.dishes.remove(event.dishes.dishId);
        event.save(function(err) {
            if (err) return console.log(err);
            res.redirect('/');
        });
    });
}


module.exports = {
    allDishes,
    newDish,
    deleteDish
}