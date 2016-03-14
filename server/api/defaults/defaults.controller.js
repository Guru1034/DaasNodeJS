'use strict';

var _ = require('lodash');
var config = require('../../config');
var querystring = require('querystring');
var DefaultsService = require('./defaults.service.js');

var getProcessed = function getProcessed(req, res) {

    // This is the url which will send us get

    // Mock Url

    // set up for call
    // var url = "http:///posts";

    // var options = {
    //         host: "jsonplaceholder.typicode.com",
    //         port: 80
    //     };
    var options = config.daasInstance.options;
    options.path = '/data/api/v2/service/defaults';
    // options.headers = {
    //     'Authorization': 'Basic ZGFhc191c2VyMTpXZWxjb21lMQ=='
    //     };

    // calling external api

    // it is promise object

    // read about promise it is async call

    DefaultsService.getData(options).then(function (response) {

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
//# sourceMappingURL=defaults.controller.js.map
