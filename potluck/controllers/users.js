var User = require('../models/user');

function index(req, res) {
    res.render('events/events', {user: req.user});
}

function createEvent(req, res) {
  
    console.log('body', req.body);
    req.user.events.push(req.body);
    console.log('events', req.user.events)
    req.user.save(function(err) {
        if (err) {
            console.log('error, yo')
            res.redirect('/events');
        }
        res.render('events/events', {user: req.user});
    });
}

module.exports = {
    index,
    createEvent
}