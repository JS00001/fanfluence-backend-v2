require('dotenv').config();

const config = {
    env: process.env.ENV,
    port: process.env.PORT,
    mongo_url: process.env.MONGO_URL,

    twilio_sid: process.env.TWILIO_SID,
    twilio_auth: process.env.TWILIO_AUTH,
    twilio_verify_sid: process.env.TWILIO_VERIFY_SID,

    jwt_expiration: '168hr',
    jwt_secret: process.env.JWT_SECRET,

    max_invite_chance: 50,
    min_invite_chance: 10,
}

module.exports = config;