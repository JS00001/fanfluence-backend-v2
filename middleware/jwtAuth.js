const jwt = require('jsonwebtoken');

const lang = require('../utils/lang');
const config = require('../config');

const UserSchema = require('../models/user');

module.exports.default = (req, res, next) => {
    next();
}

module.exports.user = async (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json(lang.default.unauthorized);

    try {
        const decoded = jwt.verify(token, config.jwt_secret);
        const user = await UserSchema.findById(decoded._id);

        if (!user) return res.status(401).json(lang.default.unauthorized);

        req.user = user;
        next();
    } catch {
        return res.status(401).json(lang.default.unauthorized);
    }
}