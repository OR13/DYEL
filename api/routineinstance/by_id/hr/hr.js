var rp = require('request-promise');

module.exports = function (form, routine_instance_id) {

    var endpoint = this.config.api_root + '/api/v1/routineinstance/' + routine_instance_id + '/hr/';

    var options = {
        method: 'POST',
        url: endpoint,
        json: true,
        form: form
    };

    return rp(options)

};
