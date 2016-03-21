var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
   var data = {key: 'value', hello: 'world'};//
  console.info(req.body);
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.write(JSON.stringify(data));
  res.end();
});

module.exports = router;
