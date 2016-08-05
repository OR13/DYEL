
var dyel = require('../../../../dyel');

var assert = require('chai').assert;

describe('.routineinstance_by_id_hr(routine_instance_id)', function () {

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

    it('should return the user\'s raw HR data for a give routine instance.', function () {

        var routine_instance_id = '62571';

        return dyel.routineinstance_by_id_hr({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token
        }, routine_instance_id)
            .then((data) => {

                assert.isObject(data);

                // console.log(data.hr_data)

                // status
                assert.isString(data.status);
                // errors[]
                assert.isArray(data.errors);

                // hr_data[]
                assert.isObject(data.hr_data);
                // routine_instance_id
                assert.isString(data.routine_instance_id);


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

