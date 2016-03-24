var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
 // res.send('respond with a resource');

  var data = {key: 'value', hello: 'world'};//
  console.info(req.body);
  console.info(req.body.user);
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  //res.writeHead(200,{'Content-Type': 'text/plain'});
  res.write(JSON.stringify(data));
  res.end();
});

module.exports = router;
