
var dyel = require('../../../../../dyel');

var assert = require('chai').assert;

describe.skip('.routine_by_id_activity_post_by_slot_number(routine_id, slot_number)', function () {

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

        var routine_id = '23599';
        var slot_number = 0;

        return dyel.routine_by_id_activity_post_by_slot_number({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token,
            name: 'foo'
        }, routine_id, slot_number)
            .then((data) => {

                assert.isObject(data);

                // console.log(data)

                // status
                assert.isString(data.status);
                // errors[]
                assert.isArray(data.errors);

                // name
                assert.isString(data.name);
                // id
                assert.isString(data.id);
                // slot_number
                assert.isNumber(data.slot_number);
                // units
                assert.isString(data.units);
                // units_text
                assert.isString(data.units_text);
                // value
                assert.isString(data.value);
                // weight
                assert.isString(data.value);

            })
            .catch((err) => {
                // API call failed...
                console.log('err: ', err);
                // assert(err === undefined);
            });

    });


    after(function () {
        // runs after all tests in this block
        // console.log('login tests complete.')
    });

});

