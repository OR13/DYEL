
var dyel = require('../../../../dyel');

var assert = require('chai').assert;

describe('.routine_by_id(routine_id)', function () {

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

    it('should return meta data for the routine and exercise data for the given user/routine_id.', function () {

        var routine_id = '23599';

        return dyel.routine_by_id({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token,
        }, routine_id)
            .then((data) => {

                assert.isObject(data);

                // console.log(data)

                // status
                assert.isString(data.status);
                // errors[]
                assert.isArray(data.errors);
                
                // routine{
                //     id
                //     name
                //     modified_date
                //     exercises[{
                //         name
                //         id
                //         slot_number
                //         units
                //         units_text
                //         value
                //         weight
                //     }]
                // }

                assert.isObject(data.routine);

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

