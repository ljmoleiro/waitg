'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
    name            : { type: String },
    email           : { type: String },
    loginAvatarUrl  : { type: String },
    regDate        : { type: Date, default: new Date()}
});

module.exports = {
    UserProfile: mongoose.model('userProfile', UserProfileSchema)
};
