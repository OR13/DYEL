
var dyel = require('../../../dyel');

var assert = require('chai').assert;

describe('.auth_login(credentials)', function () {

    before(function () {
        // runs before all tests in this block
        dyel.init();
        // console.log('begin login tests complete.')
    });

    it('should return status of "ok" on success and "failed" on error.', function () {
        
        // Undocumented behavior shows this returns account information as well.

        return dyel.auth_login({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            username: dyel.config.credentials.username,
            password: dyel.config.credentials.password
        })

            .then((sessionObject) => {

                assert.isObject(sessionObject);

                // status
                assert.isString(sessionObject.status);
                assert(sessionObject.status === 'ok');
                // errors[]
                assert.isArray(sessionObject.errors);

                // token
                assert.isString(sessionObject.token);
                // user_id
                assert.isString(sessionObject.user_id);

                // ensure the token is set after login
                assert.equal(dyel.session.token, sessionObject.token)

            })
            .catch((err) => {
                // API call failed...
                // console.log('err: ', err);
                 assert(err === undefined);
            });

    });


    after(function () {
        // runs after all tests in this block
        // console.log('login tests complete.')
    });

});