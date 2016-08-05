
var dyel = require('../../dyel');

var assert = require('chai').assert;

describe('.preferences()', function () {

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

    it('should return preferences for the given user.', function () {
        return dyel.preferences({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret,
            auth_token: dyel.session.token
        })

            .then((preferencesObject) => {

                assert.isObject(preferencesObject);

                // console.log(preferencesObject);

                // status
                assert.isString(preferencesObject.status);
                // errors[]
                assert.isArray(preferencesObject.errors);
                // user_id
                assert.isString(preferencesObject.user_id);
                // full_name
                assert.isString(preferencesObject.full_name);
                // first_name
                assert.isString(preferencesObject.first_name);
                // last_name
                assert.isString(preferencesObject.last_name);
                // weight_units ("L" for pounds "K" for kilograms)
                assert.isString(preferencesObject.weight_units);
                // weight_in_pounds
                assert.isNumber(preferencesObject.weight_in_pounds);
                // weight_in_kilos
                assert.isNumber(preferencesObject.weight_in_kilos);
                // wingspan_in_inches
                assert.isNumber(preferencesObject.wingspan_in_inches);
                // height_feet
                assert.isNumber(preferencesObject.height_feet);
                // height_inches
                assert.isNumber(preferencesObject.height_inches);
                // height_cm
                // assert.isNumber(preferencesObject.height_cm);
                // birth_date
                assert.isString(preferencesObject.birth_date);
                // gender
                assert.isString(preferencesObject.gender);
                // synced_program_id
                assert.isNumber(preferencesObject.synced_program_id);
                // console.log('preferencesObject.synced_program_id: ', preferencesObject.synced_program_id);
                // algo_version
                assert.isString(preferencesObject.algo_version);
                // profile_picture_url
                assert.isString(preferencesObject.profile_picture_url);
                // profile_picture_md5
                assert.isString(preferencesObject.profile_picture_md5);
                // app_debug
                assert.isNumber(preferencesObject.app_debug);
                // pinned_metric
                // assert(preferencesObject.pinned_metric === null);
                // twentyfour_hour_clock : yes/no
                // assert.isString(preferencesObject.twentyfour_hour_clock);
                // last_synced
                // assert.isString(preferencesObject.last_synced);
                // last_synced_formatted
                // assert.isString(preferencesObject.last_synced_formatted);

            })
            .catch((err) => {
                // API call failed...
                console.log('err: ', err);
                //  assert(err === undefined);
            });

    });


    after(function () {
        // runs after all tests in this block
        // console.log('login tests complete.')
    });

});

