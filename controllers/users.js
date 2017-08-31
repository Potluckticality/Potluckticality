var Event = require('../models/event');
var User = require('../models/user');
var transporter = require('./../config/mail');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function index(req, res) {
    User.populate(req.user, 'events', function(err, user) {
        if(err) console.log(err);
        console.log(user.events)
        res.render('events/events', {user})
    })
}

function showEvent(req, res) {
    req.user.event.findById(req.params.id, function(err, event) {
        console.log(event);
    });
}

function createEvent(req, res) {

        let party = new Event(req.body);
        party.save(function(err, party) {
            req.user.events.push(party);
            req.user.save(function(err, user) {
                if (err) {
                    console.log(err);
                } else {
                    User.populate(req.user, 'events', function(err) {
                        return res.render('events/events', {user:req.user});
                    });
                }
            });
        });
}

function updateEvent(req, res) {
    Event.findById(req.params.id, function(err, event) {
        event.title = req.body.title;
        event.location = req.body.location;
        event.time = req.body.time;
        event.description = req.body.description;
        event.date = req.body.date;
        event.photo = req.body.photo;
        event.category = req.body.category;
        event.save(function (err) {
            if(err) {
                console.log(err)
            } else {
                User.populate(req.user, 'events', function(err) {
                    return res.redirect('/events')
                });
            }
        });
    });
}

function deleteEvent(req, res) {
    Event.findByIdAndRemove(req.params.id, function(err, response) {
        if (err) {
            res.redirect('/events');
        } else {
            User.populate(req.user, 'events', function(err) {
                return res.redirect('/events')
            });
        }
    });
}

var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path')
var templateDir = path.join(__dirname, './../views/invite-email');

function sendEmail(req,res) {
    var myTemplate = new EmailTemplate(templateDir);

    myTemplate.render(info, function(err, result) {
        if (err) console.log('ERRROORRRR')
    })

    var mailOptions={
        from: req.user.email,
        to: req.body.to, 
        cc: req.body.cc,
        subject: 'You are invited!',
        html: req.body.text
        // html: html.ejs
    }

    // var myTemplate = new EmailTemplate(templateDir);

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

function homePage(req, res) {
    User.populate(req.user, 'events', function(err) {
        res.render('index', {user:req.user})
    })
}
 
module.exports = {
    index,
    createEvent,
    showEvent,
    updateEvent,
    deleteEvent,
    sendEmail,
    prepEmail,
    homePage
}