var Event = require('../models/event');

function allDishes(req, res) {
    Event.findById(req.params.id, function(err, event) {
        if (err) return res.redirect('/');
        res.render('events/events', {event, dishes: event.dishes});
    });
}

function newDish(req, res) {
    Event.findById(req.params.id, function(err, event) {
        event.dishes.push({dish: req.body.dish, userName:req.user.firstName, dishId:req.user.id});  
        event.save(function(err) {
            if (err) return res.redirect('/');
            res.redirect('/');
        });
    });
}

function deleteDish(req, res) {
    Event.findById(req.params.id, function(err, event) {
        event.dishes.id(req.params.dishId) && event.dishes.id(req.params.dishId).remove();

        event.save(function(err) {
            res.redirect('/');
        });
    });
}


module.exports = {
    allDishes,
    newDish,
    deleteDish
}