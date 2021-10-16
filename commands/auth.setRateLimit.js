const config = require('../config');

const twilio = require('twilio');

const twilioAuth = config.twilio_auth;
const twilioAccountSid = config.twilio_sid;
const twilioVerifySid = config.twilio_verify_sid
const twilioClient = new twilio(twilioAccountSid, twilioAuth);

module.exports = (to, ) => {

}
