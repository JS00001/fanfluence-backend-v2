const accountController = require('../controllers/account');

module.exports = {
    // Get current user
    getCurrentAccount: {
        auth: 1,
        method: 'get',
        path: '/account',
        handler: accountController.getCurrentUser.bind(this)
    },

    // Get current user's feed
    getCurrentAccountFeed: {
        auth: 1,
        method: 'get',
        path: '/account/feed',
        handler: accountController.getCurrentUserFeed.bind(this)
    },

    // Follow a user by username
    followAccount: {
        auth: 1,
        method: 'post',
        path: '/account/:username/follow',
        handler: accountController.followAccount.bind(this)
    },

    // Get an account by username
    getAccount: {
        auth: 1,
        method: 'get',
        path: '/account/:username',
        handler: accountController.getAccount.bind(this)
    },
}