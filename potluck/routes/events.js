var router = require('express').Router();
var eventCtrl = require('./../controllers/users');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}



module.exports = router;