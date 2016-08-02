
var dyel = require('../../../index');

var assert = require('chai').assert;


describe('.auth_logout(...)', function () {

    before(function () {
        // runs before all tests in this block
        dyel.init();
        // console.log('begin login tests complete.')
    });

    it('should return an object with status ok', function () {

        return dyel.auth_logout({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token
        })
            .then((data) => {
                assert.isObject(data);
                assert(data.status === 'ok');
            })
            .catch((err) => {
                // API call failed...
                console.error(err);
            });
    });

    after(function () {
        // runs after all tests in this block
        // console.log('login tests complete.')
    });

});
