/**
 * Created by ericw on 2016/4/7.
 */
var express = require('express');
var router = express.Router();

router.use('/',function(req,res,next){
   res.send('hahahah');
});



module.exports = router;
