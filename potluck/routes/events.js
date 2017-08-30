var router = require('express').Router();
var eventCtrl = require('./../controllers/events');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}



module.exports = router;