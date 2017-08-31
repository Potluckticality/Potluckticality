var Event = require('../models/event');
var User = require('../models/user');
var transporter = require('./../config/mail');
var EmailTemplate = require('email-templates').EmailTemplate
var path = require('path');
var templateDir = path.join(__dirname, '../views', 'templates', 'invite-email' )
var async = require('async');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function index(req, res) {
    User.populate(req.user, 'events', function(err, user) {
        if(err) console.log(err);
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

function sendEmail(req,res) {
    User.populate(req.user, 'events', function(err, user) {
        if(err) console.log(err);
        var emailTemplate = new EmailTemplate(templateDir)
        Event.findById(req.params.id, function(err, event) {
            var info = {
                user: req.user.firstName, 
                event: event.category, 
                time: event.time, 
                location: event.location, 
                to: req.body.to, 
                subject: req.body.subject,
                id: event.id
            }
            emailTemplate.render(info, function(err, invite) {
                var mailOptions = {
                    to:info.to,
                    from:req.user.email,
                    subject:info.subject,
                    html: invite.html,
                    style: invite.css
                }
                console.log(invite)
                transporter.sendMail(mailOptions, function(err, info) {
                    if(err) {
                        return console.log(err);
                    } else {
                        console.log('Message %s sent: %s', info.response, info.message);
                        res.redirect('/events');
                    }
                    transporter.close();
                });
            });
        });      
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
 
function confirmPage(req,res) {
    if(req.query.attending) {
        Event.findById(req.params.id, function(err, event) {
            event.users.push(req.user)
            event.save(function(err) {
                if(err) console.log(err)
                res.render('/events/')
            })
        })
    }
    res.json(null)

}

module.exports = {
    index,
    createEvent,
    showEvent,
    updateEvent,
    deleteEvent,
    sendEmail,
    prepEmail,
    homePage,
    confirmPage
}