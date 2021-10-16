const mongoose = require('mongoose');

const smsSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Sms', smsSchema);