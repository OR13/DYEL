var rp = require('request-promise');

module.exports = function (form) {

    var endpoint = this.config.api_root + '/api/v1/workouts/day/';

    var options = {
        method: 'POST',
        url: endpoint,
        json: true,
        form: form
    };

    return rp(options)

};
