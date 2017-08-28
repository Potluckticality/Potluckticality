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
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log('hitting this path');
    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            return console.log(err);
        } 
        console.log("Message %s sent: %s", info.response, info.message);
        res.redirect("/events");
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