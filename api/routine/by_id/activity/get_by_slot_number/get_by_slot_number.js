var rp = require('request-promise');

module.exports = function (form, routine_id, slot_number) {

    var endpoint = this.config.api_root + '/api/v1/routine/' + routine_id + '/activity/' + slot_number + '/';

    var options = {
        method: 'GET',
        url: endpoint,
        json: true,
        qs: form
    };

    return rp(options)

};
