const config = require('../config');

const twilio = require('twilio');

const twilioAuth = config.twilio_auth;
const twilioAccountSid = config.twilio_sid;
const twilioVerifySid = config.twilio_verify_sid
const twilioClient = new twilio(twilioAccountSid, twilioAuth);

module.exports = smsTo => {
    return new Promise((resolve, reject) => {
        twilioClient.verify.services(twilioVerifySid).verifications
        .create({
            to: smsTo,
            channel: 'sms',
        })
        .then(() => resolve())
        .catch(() => reject());
    })
}
