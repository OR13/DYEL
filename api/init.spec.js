

var dyel = require('../index');

var assert = require('chai').assert;

describe('.init()', function () {

    before('reset config object', function () {
        dyel.config = undefined;
    });

    it('should initialize the api config from env variables', function () {

        assert.equal(dyel.config, undefined);

        dyel.init();

        assert.equal(dyel.config.api_root, process.env.ATLAS_WEARABLES_API_ROOT);

    });

    after('reset config object', function () {
        dyel.config = undefined;
    });

});

describe('.init(config)', function () {

    before('reset config object', function () {
        dyel.config = undefined;
    });

    it('should initialize the api config from a config object', function () {

        assert.equal(dyel.config, undefined);

        var config = {
            api_root: process.env.ATLAS_WEARABLES_API_ROOT,
            credentials: {
                api_sid: process.env.ATLAS_WEARABLES_SID,
                api_secret: process.env.ATLAS_WEARABLES_SECRET,
                username: process.env.ATLAS_WEARABLES_USERNAME,
                password: process.env.ATLAS_WEARABLES_PASSWORD
            }
        }

        dyel.init(config);

        assert.equal(dyel.config.api_root, config.api_root);

    });

    after('reset config object', function () {
        dyel.config = undefined;
    });

});
