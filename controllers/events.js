var Event = require('../models/event');
var User = require('../models/user');

// NOT SURE THESE WORK! JUST HERE FOR NOW :) 
// possibly can do this server side, we shall see!
function allDishes(req, res) {
    Event.findById(req.params.id, function(err, event) {
        // temporarily render this page??
        res.render('events/events', {event, dishes: event.dishes});
    });
}

function newDish(req, res) {
    Event.findById(req.params.id, function(err, event) {
        event.dishes.push(req.body.dish);
        event.save(function(err) {
            res.redirect('/events');
        });
    });
}

function deleteDish(req, res) {
    Event.findById(req.params.id, function(err, event) {
        event.dishes.remove(event.dishes._id);
        event.save(function(err) {
            if (err) return console.log(err);
            res.redirect('/events');
        })
    })
}


module.exports = {
    allDishes,
    newDish,
    deleteDish
}