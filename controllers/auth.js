const lang = require('../utils/lang');
const sendCode = require('../commands/auth.sendCode');
const verifyCode = require('../commands/auth.verifyCode');
const createToken = require('../commands/jwt.createToken');

const SmsSchema = require('../models/sms');
const UserSchema = require('../models/user');

/**
 * Request Type: POST
 * URL: /auth/register
 * Body:
 * - username: string
 * - phoneNumber: string
 * Response:
 * - 200: User Object with authorization
 * - 400: Bad Request
 * - 401: Unauthorized
 */
module.exports.register = async (req, res) => {
    const {phoneNumber, code, username} = req.body;

    if (!phoneNumber) return res.status(400).json(lang.default.invalid_body);
    
    const findPhone = await SmsSchema.findOne({phoneNumber});
    const phoneVerified = findPhone?.verified;

    // Send SMS Message
    if (!code && !username) {
        if (findPhone) return res.status(400).json(lang.register.phone_in_use);

        sendCode(phoneNumber)
        .then(() => res.status(200).json(lang.default.completed))
        .catch(() => res.status(400).json(lang.register.phone_invalid));
    }

    // Verify SMS Code
    else if (code && !username) {
        verifyCode(phoneNumber, code)
        .then(async () => {
            await SmsSchema.findOneAndUpdate(
                {phoneNumber}, 
                {$setOnInsert: {verified: true}}, 
                {returnOriginal: false, upsert: true}
            )
            res.status(200).json(lang.default.completed);
        })
        .catch(() => res.status(400).json(lang.register.code_invalid));
    }
    
    // Register the User
    else if (username && phoneVerified) {
        const identifiersExist = await UserSchema.findOne({$or: [{phoneNumber}, {username}]});

        if (identifiersExist) return res.status(400).json(lang.register.identifier_in_use);

        const userDocument = await UserSchema.create({phoneNumber, username});

        const successMessage = lang.default.completed;
        successMessage.data.authorization = createToken(userDocument.toObject());
        return res.status(200).json(successMessage);
    }

    // Error Occurred
    else {
        return res.status(500).json(lang.default.server_error);
    }
}


/**
 * Request Type: POST
 * URL: /auth/login
 * Body:
 * - username: string
 * - phoneNumber: string
 * Response:
 * - 200: User Object with authorization
 * - 400: Bad Request
 * - 401: Unauthorized
 */
module.exports.login = async (req, res) => {
    const {phoneNumber, code} = req.body;

    if (!phoneNumber) return res.status(400).json(lang.default.invalid_body);

    const findAccount = await UserSchema.findOne({phoneNumber});
    const active = findAccount?.active;
    
    if (!code) {
        if (!findAccount) return res.status(400).json(lang.login.account_not_exist);
        if (!active) return res.status(401).json(lang.login.account_disabled);

        sendCode(phoneNumber)
        .then(() => res.status(200).json(lang.default.completed))
        .catch(() => res.status(400).json(lang.login.phone_invalid));
    }

    else {
        verifyCode(phoneNumber, code)
        .then(() => {
            const successMessage = lang.default.completed;
            successMessage.data.authorization = createToken(findAccount.toObject());
            return res.status(200).json(successMessage)
        })
        .catch(() => res.status(400).json(lang.login.code_invalid))
    }
}