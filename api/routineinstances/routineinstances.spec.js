
var dyel = require('../../dyel');

var assert = require('chai').assert;

describe('.routineinstances()', function () {

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

    it('should return all workouts associated to the user\'s account.', function () {

        return dyel.routineinstances({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token
        })
            .then((data) => {

                assert.isObject(data);

                // console.log(data)

                // status
                assert.isString(data.status);
                // errors[]
                assert.isArray(data.errors);

                // Could check these array types better...

                // workouts[{
                //     id
                //     start_time
                //     end_time
                //     start_time_raw
                //     end_time_raw
                //     upload_time
                //     activity_count
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
                // }]

                assert.isArray(data.workouts);

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

