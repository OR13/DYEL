var rp = require('request-promise');

module.exports = function (form, routine_id, slot_number) {

    var endpoint = this.config.api_root + '/api/v1/routine/' + routine_id + '/activity/' + slot_number + '/';

    var options = {
        method: 'POST',
        url: endpoint,
        json: true,
        form: form
    };

    return rp(options)

};
