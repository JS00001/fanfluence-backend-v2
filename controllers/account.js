const lang = require('../utils/lang');


/**
 * Request Type: GET
 * URL: /account
 * Headers:
 * - Authorization: <token>
 * Response:
 * - 200: User Object
 * - 401: Unauthorized
 */
module.exports.getCurrentUser = async (req, res) => {
    return res.status(200).json(req.user);
}


/**
 * Request Type: GET
 * URL: /account/:username
 * Headers:
 * - Authorization: <token>
 * Response:
 * - 200: User Object
 * - 400: Bad Request
 * - 401: Unauthorized
 */
module.exports.getAccount = async (req, res) => {
    const {username} = req.params;

    if (!username) return res.status(400).json(lang.account.account_not_exist);

}


/**
 * Request Type: GET
 * URL: /account/feed
 * Headers:
 * - Authorization: <token>
 * Response:
 * - 200: Array of Post Objects
 * - 401: Unauthorized
 */
module.exports.getCurrentUserFeed = async (req, res) => {
    res.json({"test": "test"});
}


/**
 * Request Type: POST
 * URL: /account/:username/follow
 * Headers:
 * - Authorization: <token>
 * Response:
 * - 200: User Object
 * - 400: Bad Request
 * - 401: Unauthorized
 */
module.exports.followAccount = async (req, res) => {
    res.json({"test": "test"});
}