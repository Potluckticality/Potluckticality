var User = require('../models/user');

function index(req, res) {
    res.render('events/events', {user: req.user});
}

module.exports = {
    index
}