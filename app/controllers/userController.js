'use strict';

const userProfile = require('../backend/models').UserProfile;

const userController = {
    checkProfileExist(email, callback) {
        if (typeof callback === "function") {
            userProfile.findOne({$or: [{'googleUser.email': email}, {'facebookUser.email': email}, {'email': email}]},
                (error, model) => {
                    callback(error, model);
                });
        }
    }
};

module.exports = userController;
