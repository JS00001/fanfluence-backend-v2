const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const autopopulate = require('mongoose-autopopulate');

const userSchema = new mongoose.Schema({
    // USER INFO
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },

    // PROFILE INFO
    bio: {
        type: String,
        required: false,
        default: 'Well, hello there'
    },
    profilePicture: {
        type: String,
        default: 'https://myurl.io'
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    premiumFollowers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    premiumFollowing: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
}, {timestamps: true})

userSchema.plugin(autopopulate);


module.exports = mongoose.model('User', userSchema);