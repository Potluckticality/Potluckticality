var express = require('express');
var router = express.Router();
var userCtrl = require('./../controllers/users');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

router.get('/events', isLoggedIn, userCtrl.index);
router.post('/events', isLoggedIn, userCtrl.createEvent);

module.exports = router;
