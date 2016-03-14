'use strict';

var express = require('express');
var controller = require('./exports.controller');

var router = express.Router();

router.get('/', controller.getProcessed);

module.exports = router;
//# sourceMappingURL=index.js.map
