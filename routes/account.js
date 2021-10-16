const accountController = require('../controllers/account');

module.exports = {
    // Get current user
    getCurrentAccount: {
        method: 'get',
        path: '/account',
        handler: accountController.getCurrentUser.bind(this)
    },

    // Get current user's feed
    getCurrentAccountFeed: {
        method: 'get',
        path: '/account/feed',
        handler: accountController.getCurrentUserFeed.bind(this)
    },

    // Follow a user by username
    followAccount: {
        method: 'post',
        path: '/account/:username/follow',
        handler: accountController.followAccount.bind(this)
    },

    // Get an account by username
    getAccount: {
        method: 'get',
        path: '/account/:username',
        handler: accountController.getAccount.bind(this)
    },
}