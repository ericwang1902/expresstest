/**
 * Created by ericw on 2016/4/7.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("开发中！!!");

});



module.exports = router;