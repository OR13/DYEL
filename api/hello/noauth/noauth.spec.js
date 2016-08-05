
var dyel = require('../../../dyel');

var assert = require('chai').assert;

describe('.hello_noauth(...)', function () {

    before(function () {
        // runs before all tests in this block
        dyel.init();
        // console.log('begin login tests complete.')
    });

    it('should return an object with status ok', function () {

        return dyel.hello_noauth({
            api_sid: dyel.config.credentials.api_sid,
            api_secret: dyel.config.credentials.api_secret
        })

            .then((data) => {
        
                assert.isObject(data);
                // status
                assert.isString(data.status);
                assert(data.status === 'ok');
                // errors[]
                assert.isArray(data.errors);

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

