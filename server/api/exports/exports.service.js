'use strict';

var _ = require('lodash');
var https = require('http');
var q = require('q');

var getData = function getData(options) {
    var deffered = q.defer();
    try {
        var body = '';
        var getrequest = https.get(options, function (response) {
            //console.log(response.status);
            response.on('data', function (chunk) {
                body += chunk;
            });
            response.on('end', function () {

                deffered.resolve(body);
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
//# sourceMappingURL=exports.service.js.map
