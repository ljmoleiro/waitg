'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const FacebookUserSchema = new Schema({
    id          : { type: String },
    name        : { type: String },
    email       : { type: String },
    avatarUrl   : { type: String },
    profileUrl  : { type: String },
    gender      : { type: String }
});

const GoogleUserSchema = new Schema({
    id          : { type: String },
    name        : { type: String },
    email       : { type: String },
    avatarUrl   : { type: String },
    gender      : { type: String },
    profileUrl  : { type: String },
    birthday    : { type: String }
});

const UserProfileSchema = new Schema({
    name            : { type: String },
    email           : { type: String },
    loginAvatarUrl  : { type: String },
    regDate         : { type: Date, default: new Date()},
    facebookProfile : FacebookUserSchema,
    googleProfile   : GoogleUserSchema
});

module.exports = {
    UserProfile: mongoose.model('userProfile', UserProfileSchema),
    FacebookProfile: mongoose.model('facebookProfile', FacebookUserSchema),
    GoogleProfile: mongoose.model('googleProfile', GoogleUserSchema)
};
