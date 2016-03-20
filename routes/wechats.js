var express = require('express');
var router = express.Router();
var wechat = require('wechat');
var config={
  token: 'testtesttest',
  appid: 'wx45eb07597f1e004a',
  encodingAESKey: 'GwpmVSoQTqy55MMPA4qKyTTiQkFs8sPiSt5ou3Z0lSI'
};
router.get('/', wechat(config, function (req, res, next) {
  // 微信输入信息都在req.weixin上
  var message = req.weixin;
  res.reply('Hello world!');
}));
module.exports = router;
