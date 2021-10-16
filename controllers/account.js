/**
 * Request Type: GET
 * URL: /account
 * Headers:
 * - Authorization: <token>
 * Response:
 * - 200: User Object
 * - 401: Unauthorized
 */
module.exports.getCurrentUser = (req, res) => {
    res.json({"test": "test"});
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
module.exports.getAccount = (req, res) => {
    res.json({"test": "test"});
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
module.exports.getCurrentUserFeed = (req, res) => {
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
module.exports.followAccount = (req, res) => {
    res.json({"test": "test"});
}