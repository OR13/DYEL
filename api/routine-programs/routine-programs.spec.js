
var dyel = require('../../dyel');

var assert = require('chai').assert;

describe('.routine_programs()', function () {

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

    it('should return a list of routine programs for the given user.', function () {

        return dyel.routine_programs({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token
        })
            .then((routineProgramsObject) => {

                assert.isObject(routineProgramsObject);

                // console.log(routineProgramsObject)

                // status
                assert.isString(routineProgramsObject.status);
                // errors[]
                assert.isArray(routineProgramsObject.errors);

                // Could check these array types better...

                // routine_programs[{
                //     id
                //     name
                // }]

                assert.isArray(routineProgramsObject.routine_programs);

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

