
var dyel = require('../../../dyel');

var assert = require('chai').assert;

 describe('.auth_login(credentials)', function () {

        before(function () {
            // runs before all tests in this block
            dyel.init();
            // console.log('begin login tests complete.')
        });

        it('should return and set a session object', function () {

            return dyel.auth_login({
                api_sid: dyel.config.credentials.api_sid,
                api_secret: dyel.config.credentials.api_secret,
                username: dyel.config.credentials.username,
                password: dyel.config.credentials.password
            })

                .then((sessionObject) => {

                    // console.log( sessionObject.token );

                    assert.isObject(sessionObject);

                    assert.equal(dyel.session.token, sessionObject.token)

                })
                .catch((err) => {
                    // API call failed...
                    console.log('err: ', err);
                });

        });


        after(function () {
            // runs after all tests in this block
            // console.log('login tests complete.')
        });

    });