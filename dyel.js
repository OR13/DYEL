

var hello_noauth = require('./api/hello/noauth/noauth');
var hello_auth = require('./api/hello/auth/auth');

var auth_login = require('./api/auth/login/login');
var auth_logout = require('./api/auth/logout/logout');


var api = {
    init: function (config) {

        if (config) {
            this.config = config;
        } else {
            this.config = {
                api_root: process.env.ATLAS_WEARABLES_API_ROOT,
                auth_token: process.env.ATLAS_WEARABLES_AUTH_TOKEN,
                credentials: {
                    api_sid: process.env.ATLAS_WEARABLES_SID,
                    api_secret: process.env.ATLAS_WEARABLES_SECRET,
                    username: process.env.ATLAS_WEARABLES_USERNAME,
                    password: process.env.ATLAS_WEARABLES_PASSWORD
                }
            }
        }
    },
    hello_noauth: hello_noauth,
    hello_auth: hello_auth,
    auth_login: auth_login,
    auth_logout: auth_logout
};



module.exports = api;


