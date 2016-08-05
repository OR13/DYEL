var rp = require('request-promise');

module.exports = function (form, exercise_id) {

    var endpoint = this.config.api_root + '/api/v1/activities/' + exercise_id + '/';

    var options = {
        method: 'POST',
        url: endpoint,
        json: true,
        form: form
    };

    return rp(options)

};
