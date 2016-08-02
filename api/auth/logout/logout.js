var rp = require('request-promise');

module.exports = function (body) {

    var endpoint = this.config.api_root + '/api/v1/auth/logout/';

    var options = {
        method: 'POST',
        url: endpoint,
        json: true,
        form: body
    };

    return rp(options);

}

