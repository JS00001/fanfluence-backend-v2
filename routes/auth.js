const authController = require('../controllers/auth');

module.exports = {
    // Register a user
    register: {
        auth: 0,
        method: 'post',
        path: '/auth/register',
        handler: authController.register.bind(this)
    },

    // Login a user
    login: {
        auth: 0,
        method: 'post',
        path: '/auth/login',
        handler: authController.login.bind(this)
    }
}