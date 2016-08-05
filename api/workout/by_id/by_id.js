var rp = require('request-promise');

module.exports = function (form, workout_id) {

    var endpoint = this.config.api_root + '/api/v1/workout/' + workout_id + '/';

    var options = {
        method: 'POST',
        url: endpoint,
        json: true,
        form: form
    };

    return rp(options)

};
