
var express = require('express');
var router = express.Router();
var thing = require('./apis/thing/index');
var person = require('./apis/person/index');
var order = require('./apis/order/index')

router.use('/thing', thing);
router.use('/person',person);
router.use('/order',order);

module.exports = router;
