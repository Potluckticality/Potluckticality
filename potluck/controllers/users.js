var User = require('../models/user');

function index(req, res) {
    res.render('events/events', {user: req.user});
}

function showEvent(req, res) {
    req.user.event.findById(req.params.id, function(err, event) {
        console.log(event);
    });
}

function createEvent(req, res) {
    req.user.events.push(req.body);
    console.log(req.body);
    req.user.save(function(err) {
        if (err) res.redirect('/');
        return res.render('events/events', {user: req.user});
    });
}

function updateEvent(req, res) {
    var event = req.user.events.id(req.params.id);
    event.title = req.body.title;
    event.location = req.body.location;
    event.time = req.body.time;
    event.description = req.body.description;
    event.date = req.body.date;

    req.user.save(function(err) {
        if (err) res.redirect('/events');
        return res.render('events/events');
    });
}

function deleteEvent(req, res) {
    req.user.events.remove(req.params.id);
    req.user.save(function(err) {
        if (err) res.redirect('/events');
        return res.render('events/events')
    })
}


module.exports = {
    index,
    createEvent,
    showEvent,
    updateEvent,
    deleteEvent
}