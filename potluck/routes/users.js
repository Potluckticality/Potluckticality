var express = require('express');
var router = express.Router();
var userCtrl = require('./../controllers/users');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

router.get('/events', isLoggedIn, userCtrl.index);
router.post('/events', isLoggedIn, userCtrl.createEvent);
router.get('/events/:id', isLoggedIn, userCtrl.showEvent);
router.put('/events/:id', isLoggedIn, userCtrl.updateEvent);
router.delete('/events/:id', isLoggedIn, userCtrl.deleteEvent);
router.get('/events/:id/mail', isLoggedIn, userCtrl.prepEmail);
router.post('/events/:id/mail/send', isLoggedIn, userCtrl.sendEmail);

module.exports = router;
