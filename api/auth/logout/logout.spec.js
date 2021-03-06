
var dyel = require('../../../dyel');

var assert = require('chai').assert;


describe('.auth_logout(...)', function () {

    before(function () {
        // runs before all tests in this block
        dyel.init();
        // console.log('begin login tests complete.')
    });

    it('should return status of "ok" on success and "failed" on error.', function () {

        return dyel.auth_logout({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token
        })
            .then((data) => {
                assert.isObject(data);
                // status
                assert.isString(data.status);
                assert(data.status === 'ok');
                // errors[]
                assert.isArray(data.errors);
            })
            .catch((err) => {
                // API call failed...
                // console.error(err);
                 assert(err === undefined);
            });
    });

    after(function () {
        // runs after all tests in this block
        // console.log('login tests complete.')
    });

});
