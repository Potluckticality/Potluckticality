var User = require('../models/user');
var Event = require('../models/event');
var transporter = require('./../config/mail');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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
    event.photo = req.body.photo;
    event.category = req.body.category;
    req.user.save(function(err) {
        console.log(req.user.events)
        if (err) res.redirect('/events');
        return res.render('events/events', {user:req.user});
    });
}

function deleteEvent(req, res) {
    req.user.events.remove(req.params.id);
    req.user.save(function(err) {
        if (err) res.redirect('/events');
        return res.render('events/events', {user:req.user})
    })
}

function sendEmail(req,res) {
    var mailOptions={
        from: req.user.email,
        to: req.body.to, 
        cc: req.body.cc,
        subject: req.body.subject,
        text: req.body.text,
        html:'<h1>This is a test</h1></br><h2>here is another test<h2></br><h6>and one more</h6>'
    }

    transporter.sendMail(mailOptions, function(err, info){
        if (err) console.log(err);
        console.log("Message %s sent: %s", info.response, info.message);
        res.redirect('/events');
    });
}

function prepEmail(req,res) {
    console.log(req.params)
    return res.render('events/mail', {user:req.user, event:req.params.id})
}

module.exports = {
    index,
    createEvent,
    showEvent,
    updateEvent,
    deleteEvent,
    sendEmail,
    prepEmail
}