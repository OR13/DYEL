
var dyel = require('../../../dyel');

var assert = require('chai').assert;

describe('.workouts_month()', function () {

    //  this.timeout(5 * 1000);

    before(function () {
        // runs before all tests in this block
        dyel.init();
        // console.log('begin login tests complete.')

        return dyel.auth_login({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            username: dyel.config.credentials.username,
            password: dyel.config.credentials.password
        });
    });

    it('should return status of "ok" on success and "failed" on error.', function () {

   
        return dyel.workouts_month({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token,
            timezone: "America/Chicago",
            // year: "current"
        })
            .then((data) => {

                assert.isObject(data);

                // console.log(data)

                // status
                assert.isString(data.status);
                // errors[]
                assert.isArray(data.errors);

                // Could check this object type better...
                // months[]
                assert.isArray(data.months);

            })
            .catch((err) => {
                // API call failed...
                console.log('err: ', err);
                assert(err === undefined);
            });

    });


    after(function () {
        // runs after all tests in this block
        // console.log('login tests complete.')
    });

});

