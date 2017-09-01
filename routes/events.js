var express = require('express');
var router = express.Router();
var eventCtrl = require('./../controllers/events');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

router.get('/dishes', isLoggedIn, eventCtrl.allDishes);
router.post('/dishes', isLoggedIn, eventCtrl.newDish);
router.delete('/dishes/:id', isLoggedIn, eventCtrl.deleteDish);

module.exports = router;