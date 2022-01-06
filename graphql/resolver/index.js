const axios = require("axios");
const CloudProfileService = require('../Services/cloudprofile');

const cloudprofileResolver = require('./cloudProfile');
const abtResolver = require('./abt');
const profileResolver = require('./profile');
const claropayResolver = require('./claroPay');

module.exports = {
    Query: {
        cloudprofile: cloudprofileResolver,
        abt: abtResolver,
        profile: profileResolver,
        claropay: claropayResolver
    },
};