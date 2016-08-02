var rp = require('request-promise');

module.exports = function (credentials) {

    var endpoint = this.config.api_root + '/api/v1/auth/login/';

    var options = {
        method: 'POST',
        url: endpoint,
        json: true,
        form: credentials
    };

    return rp(options)
        .then((sessionObject) => {
            this.session = sessionObject;
            return this.session;
        })
        .catch(function (err) {
            // API call failed...
            console.log('err: ', err);
        });

};
