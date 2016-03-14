'use strict';

var _ = require('lodash');
var https = require('http');
var q = require('q');

var getData = function getData(options) {
    var deffered = q.defer();
    try {
        var body = '';
        var getrequest = https.get(options, function (response) {
            console.log(response.status);
            console.log('Inside getData');
            console.log(options);

            response.on('data', function (chunk) {
                body += chunk;
                console.log('Inside on data');
            });
            response.on('end', function () {

                deffered.resolve(body);
                //deffered.resolve(JSON.stringify(body));
                console.log('Inside on end');
            });
        }).on('error', function (err) {
            deffered.reject(err);
        });
    } catch (err) {
        deffered.reject(err);
    };
    return deffered.promise;
};

exports.getData = getData;
//# sourceMappingURL=mappings.service.js.map
