var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('./../models/user');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ 'googleId': profile.id }, function(err, user) {
      if (err) return cb(err);
      if (user) {

        if (profile.photos[0].value) {
          user.photo = profile.photos[0].value
        }
        if (profile.name.familyName) {
          user.lastName = profile.name.familyName
        }
        if (profile.name.givenName) {
          user.firstName = profile.name.givenName
        }
        user.save(function(err) {
          if (err) return cb(err);
          return cb(null, user);
        })
      } else {
        var newUser = new User({
          name: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newUser.save(function(err) {
          if (err) return cb(err);
        //   res.render('users/login');
          return cb(null, newUser);
        });
      }
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// being assigned to req.user by passport
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    // user.sendMessage();
    done(err, user);
  });
});