
var dyel = require('../../../../dyel');

var assert = require('chai').assert;

describe('.routine_by_id_delete(routine_id)', function () {

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

    it('should delete the given routine.', function () {

        var routine_id = '23597'; // 23599

        return dyel.routine_by_id_delete({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token
        }, routine_id)
            .then((data) => {

                assert.isObject(data);

                // status
                assert.isString(data.status);
                // errors[]
                assert.isArray(data.errors);

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

