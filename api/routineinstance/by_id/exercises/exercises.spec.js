
var dyel = require('../../../../dyel');

var assert = require('chai').assert;

describe.skip('.routineinstance_by_id_exercises(routine_instance_id, activity_sequence_numbers)', function () {

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

    it('should return all activities that the user has done based on the given activity sequence.', function () {

        var routine_instance_id = '62571';
        var activity_sequence_numbers = null;

        return dyel.workout_by_id_score({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token,
            activity_sequence_numbers: activity_sequence_numbers
        }, routine_instance_id)
            .then((data) => {

                assert.isObject(data);

                // console.log(data)

                // status
                assert.isString(data.status);
                // errors[]
                assert.isArray(data.errors);

                // Could check this object type better...

                // activities[{
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
                //     reps
                //     weight
                //     weight_units
                //     one_rep_max
                // }]


                assert.isArray(data.activities);

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

