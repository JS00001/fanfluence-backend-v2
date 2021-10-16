const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = user => {
    const expiresIn = { expiresIn: config.jwt_expiration };
    const token = jwt.sign(
        user,
        config.jwt_secret,
        expiresIn
    );
    
    return token;
}