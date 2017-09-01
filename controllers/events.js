var Event = require('../models/event');
var User = require('../models/user');

// NOT SURE THESE WORK! JUST HERE FOR NOW :) 
function allDishes(req, res) {
    Event.findById(req.params.id, function(err, event) {
        // temporarily render this page??
        res.render('events/events', {event, dishes: event.dishes});
    });
}

function newDish(req, res) {
    console.log("YYAYYIUWRTYEGKTF")
    // User.populate(req.user, 'events', function(err, user) {
        Event.findById(req.params.id, function(err, event) {
            console.log(req.body.dish)
            event.dishes.push({dish: req.body.dish});
            event.save(function(err) {
                console.log('dishes', event.dishes)
                res.redirect('/');
            });
        });

    // })
}

function deleteDish(req, res) {
    Event.findById(req.params.id, function(err, event) {
        event.dishes.remove(event.dishes._id);
        event.save(function(err) {
            if (err) return console.log(err);
            res.redirect('/events');
        });
    });
}


module.exports = {
    allDishes,
    newDish,
    deleteDish
}