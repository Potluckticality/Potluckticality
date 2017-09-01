var router = require('express').Router();
var passport = require('passport');
var userCtrl = require('./../controllers/users');

// The root route renders our only view
// router.get('/', function(req, res) {
//   res.render('index', {user: req.user});
// });

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

function inviteRedirect() {
  
}

router.get('/oauth2callback', passport.authenticate(
  'google', {
    successRedirect: 'back',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;