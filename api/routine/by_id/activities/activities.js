var rp = require('request-promise');

module.exports = function (form, routine_id) {

    var endpoint = this.config.api_root + '/api/v1/routine/' + routine_id + '/activities/';

    var options = {
        method: 'GET',
        url: endpoint,
        json: true,
        qs: form
    };

    return rp(options)

};
