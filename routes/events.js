var express = require('express');
var router = express.Router();
var eventCtrl = require('./../controllers/events');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

router.get('/:id/dishes', isLoggedIn, eventCtrl.allDishes);
router.post('/:id/dishes', isLoggedIn, eventCtrl.newDish);
router.delete('/:id/dishes/:dishId', isLoggedIn, eventCtrl.deleteDish);

module.exports = router;