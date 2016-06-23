'use strict';
const passport = require('passport'),
    profile = require('../backend/models').UserProfile;

const passportConfig = function(app){

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });
    passport.deserializeUser(function(id, done) {
        profile.findById(id, function(err, user) {
            done(err, user);
        });
    });

    require('./facebook')(app);
};

module.exports = passportConfig;
