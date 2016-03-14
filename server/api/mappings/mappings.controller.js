'use strict';

var _ = require('lodash');
var config = require('../../config');
var querystring = require('querystring');
var MappingsService = require('./mappings.service.js');

var getProcessed = function getProcessed(req, res) {

    // This is the url which will send us get
    // set up for call

    var options = config.daasInstance.options;
    options.path = '/data/api/v2/mapping/list';

    // calling external api

    // it is promise object

    // read about promise it is async call

    MappingsService.getData(options).then(function (response) {

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
//# sourceMappingURL=mappings.controller.js.map
