const base = new Date();
const time = `${base.toLocaleDateString()} ${base.getHours()}:${base.getMinutes()}:${base.getSeconds()}`;

const lang = {

    // Generic Response Messages
    default: {
        completed: {
            response_data: {
                created_at: time,
                response_code: 'accepted'
            }
        },
        server_error: {
            errors:[{
                code: 500,
                title: 'Internal Error',
                detail: 'an internal server error occurred'
            }]
        },
        unauthorized: {
            errors: [{
                code: 401,
                title: 'Unauthorized',
                detail: 'request is missing a valid authorization token',
            }]
        },
        invalid_body: {
            errors: [{
                code: 400,
                title: 'Invalid Request Body',
                detail: 'request is missing required body parameters',
            }]
        }
    },

    // ROUTE: /auth/register
    register: {
        code_invalid: {
            errors: [{
                code: 400,
                title: 'Invalid Request Body',
                detail: 'invalid verification code.'
            }]
        },
        phone_invalid: {
            errors: [{
                code: 400,
                title: 'Invalid Request Body',
                detail: 'invalid phone number'
            }]
        },
        phone_in_use: {
            errors: [{
                code: 400,
                title: 'Invalid Request Body',
                detail: 'phone number is already in use.'
            }]
        },
        identifier_in_use: {
            errors: [{
                code: 400,
                title: 'Invalid Request Body',
                detail: 'username or phone number is already in use'
            }]
        }
    },

    // ROUTE: /auth/login
    login: {
        code_invalid: {
            errors: [{
                code: 400,
                title: 'Invalid Request Body',
                detail: 'invalid verification code.'
            }]
        },
        phone_invalid: {
            errors: [{
                code: 400,
                title: 'Invalid Request Body',
                detail: 'invalid phone number'
            }]
        },
        account_not_exist: {
            errors: [{
                code: 400, 
                title: 'Invalid Request Body',
                detail: 'this phone number is not in use'
            }]
        },
        account_disabled: {
            errors: [{
                code: 401,
                title: 'Unauthorized',
                detail: 'this account is currently disabled'
            }]
        }
    },

    // ROUTE: /account
    account: {
        account_not_exist: {
            errors: [{
                code: 400,
                title: 'Invalid User',
                detail: 'this username does not exist'
            }]
        }
    }
}


module.exports = lang;