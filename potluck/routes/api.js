var router = require('express').Router();
var apiCtrl = require('./../controllers/api');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

router.get('/events', isLoggedIn, apiCtrl.index);
router.post('/events/new', isLoggedIn, apiCtrl.create);

module.exports = router;