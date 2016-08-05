
var dyel = require('../../dyel');

var assert = require('chai').assert;

describe('.routines(program_id)', function () {

     this.timeout(5 * 1000);

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

    it('should return a list of routines and a list of exercise names for the given user and program.', function () {

        var program_id = '81';

        return dyel.routines({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token
        }, program_id)
            .then((routinesObject) => {

                assert.isObject(routinesObject);

                // console.log(routinesObject)

                // status
                assert.isString(routinesObject.status);
                // errors[]
                assert.isArray(routinesObject.errors);

                // Could check these array types better...

                // routines[{
                //     id
                //     name
                //     modified_date
                //     activities[{
                //         id
                //         name
                //     }]
                // }]

                assert.isArray(routinesObject.routines);

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

