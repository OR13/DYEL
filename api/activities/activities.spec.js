
var dyel = require('../../dyel');

var assert = require('chai').assert;

describe('.activities()', function () {

      this.timeout(20 * 1000);

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

    it('should return the canonical list of Atlas exercises with internal IDs.', function () {
        return dyel.activities({
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

                // activities[{
                // id
                // name
                // class_name
                // harvesting_weight (if staff)
                // }]

                assert.isArray(data.activities);


                // classes[{
                // id
                // name
                // harvesting_weight
                // }]

                assert.isArray(data.classes);


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

