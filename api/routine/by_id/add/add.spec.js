
var dyel = require('../../../../dyel');

var assert = require('chai').assert;

describe('.routine_by_id_add(routine_name)', function () {

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

    it('should add a routine to the db and associates it to the user.', function () {

        var routine_name = 'test routine name';

        return dyel.routine_by_id_add({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token,
            routine_name: routine_name
        })
            .then((data) => {

                assert.isObject(data);

                // console.log(data)

                // status
                assert.isString(data.status);
                // errors[]
                assert.isArray(data.errors);
                // routine_id
                assert.isNumber(data.routine_id);

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

