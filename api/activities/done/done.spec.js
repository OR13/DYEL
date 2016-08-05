
var dyel = require('../../../dyel');

var assert = require('chai').assert;

describe('.activities_done()', function () {

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

    it('should return the list of all the exercises done by a user with internal and override IDs.', function () {
        return dyel.activities_done({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token
        })

            .then((activitiesDoneObject) => {

                // console.log(activitiesDoneObject);

                assert.isObject(activitiesDoneObject);

                // status
                assert.isString(activitiesDoneObject.status);
                // errors[]
                assert.isArray(activitiesDoneObject.errors);
                // exercises[{
                // id
                // override_id
                // name
                // }]
                assert.isArray(activitiesDoneObject.exercises);

            })
            .catch((err) => {
                // API call failed...
                // console.log('err:', err.response.body)
                // console.log('err: ', err.response.headers['location']);
                console.log(err)
                assert(err === undefined);
            });

    });


    after(function () {
        // runs after all tests in this block
        // console.log('login tests complete.')
    });

});

