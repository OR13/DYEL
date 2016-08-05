
var dyel = require('../../../../dyel');

var assert = require('chai').assert;

describe('.workout_by_id(workout_id)', function () {

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

    it('should return all activities associated to a specific workout.', function () {

        var workout_id = '62571';

        return dyel.workout_by_id({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token
        }, workout_id)
            .then((data) => {

                assert.isObject(data);

                // console.log(data)

                // status
                assert.isString(data.status);
                // errors[]
                assert.isArray(data.errors);

                // Could check this object type better...

                // workout {
                //     id
                //     start_time
                //     end_time
                //     start_time_raw
                //     end_time_raw
                //     upload_time
                //     calories
                //     rest
                //     percent_rest
                //     metrics{
                //         avg_rep_count
                //         avg_rest_seconds
                //         avg_velocity
                //         calories
                //         form_score
                //         heartrate{
                //             avg
                //             max
                //             timestamps[]
                //             values[]
                //             zone_counts[]
                //         }
                //         muscle_group_magnitudes{}
                //         muscle_magnitudes{}
                //         rep_count
                //         rep_index
                //         rep_index_zone
                //         rest_index
                //         rest_index_zone
                //         rest_seconds
                //         routine_hash
                //         velocity
                //         velocity_index
                //         velocity_index_zone
                //         volume
                //     }
                //     score{
                //         muscles{
                //             name{
                //                 score
                //             }
                //         }
                //         groups{
                //             name{
                //                 score
                //             }
                //         }
                //     }
                //     routine{
                //         id
                //         name
                //     }
                //     activities[{
                //         activity_sequence
                //         start_time
                //         end_time
                //         start_time_raw
                //         end_time_raw
                //         exercise{
                //             id
                //             name
                //         }
                //         rep_count
                //         calories
                //         weight
                //         weight_units
                //         hrt_count
                //         form_score
                //         metrics{
                //             active_seconds
                //             activity_class_id
                //             calories
                //             form_score
                //             heartrate{
                //                 avg
                //                 max
                //                 timestamps[]
                //                 values[]
                //             }
                //             muscle_group_magnitudes{}
                //             muscle_magnitudes{}
                //             rep_count
                //             rep_index
                //             rep_index_zone
                //             rest_index
                //             rest_index_zone
                //             rest_seconds
                //             velocity
                //             velocity_index
                //             velocity_index_zone
                //             volume
                //         }
                //     }]
                // }

                assert.isObject(data.workout);

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

