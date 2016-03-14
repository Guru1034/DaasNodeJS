'use strict';

var _ = require('lodash');
var config = require('../../config');
var querystring = require('querystring');
var ExportsService = require('./exports.service.js');

var getProcessed = function getProcessed(req, res) {

    // This is the url which will send us get

    var options = config.daasInstance.options;
    options.path = '/data/api/v2/jobresource/jobinstances?limit=100&sorttype=date&offset=0';

    ExportsService.getData(options).then(function (response) {

        // Got response from external api
        // return to  api caller this is resulteant resonse
        //
        response = JSON.parse(response);

        return res.status(200).send(response);
    }, function (err) {
        return res.status(501).send(err);;
    });
};

exports.getProcessed = getProcessed;
//# sourceMappingURL=exports.controller.js.map
