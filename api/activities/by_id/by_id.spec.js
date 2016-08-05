
var dyel = require('../../../dyel');

var assert = require('chai').assert;

describe('.activities_by_id(exercise_id)', function () {

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

    it('should return all exercises that the user has done based on the given exercise id.', function () {

        var activity_id = '139'; //heart rate mode

        return dyel.activities_by_id({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token
        }, activity_id)

            .then((exercisesObject) => {

                assert.isObject(exercisesObject);

                // console.log(exercisesObject);

                // status
                assert.isString(exercisesObject.status);
                // errors[]
                assert.isArray(exercisesObject.errors);

                // This could be tested better...

                // exercises[{
                //     activity_sequence
                //     routine_instance_id
                //     start_time
                //     end_time
                //     start_time_raw
                //     end_time_raw
                //     exercise{
                //         id
                //         name
                //     }
                //     set_count
                //     rep_count
                //     weight
                //     weight_units
                //     hrt_count
                //     one_rep_max
                // }]
                assert.isArray(exercisesObject.exercises);

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

