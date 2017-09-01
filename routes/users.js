var express = require('express');
var router = express.Router();
var userCtrl = require('./../controllers/users');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('logged in')
    return next();
  }
  req.session.redirectPath = req.originalUrl
  res.redirect('/');
}

function checkIfRedirected(req, res, next) {
  console.log('\n\nin checkIfRedirected > req.session =', req.session, '\n\n')
  // if req.session.redirectPath is truthy
  if(req.session.redirectPath && req.session.passport && req.session.passport.user) {
    const redirectPath = req.session.redirectPath

    req.session.redirectPath = '';
    
    console.log('redirectPath =', redirectPath)

    return res.redirect(redirectPath)
  } 
  return next();
}

router.get('/events', isLoggedIn, userCtrl.index);
router.post('/events', isLoggedIn, userCtrl.createEvent);
router.get('/', checkIfRedirected, userCtrl.homePage);
router.get('/events/:id/confirm', isLoggedIn, userCtrl.confirmPage);
router.put('/events/:id', isLoggedIn, userCtrl.updateEvent);
router.delete('/events/:id', isLoggedIn, userCtrl.deleteEvent);
router.get('/events/:id/mail', isLoggedIn, userCtrl.prepEmail);
router.post('/events/:id/mail/send', isLoggedIn, userCtrl.sendEmail);

module.exports = router;