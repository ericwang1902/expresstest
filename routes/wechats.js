var express = require('express');
var router = express.Router();
var wechat = require('wechat');
var config={
  token: 'testtesttest',
  appid: 'wx45eb07597f1e004a',
  encodingAESKey: 'GwpmVSoQTqy55MMPA4qKyTTiQkFs8sPiSt5ou3Z0lSI'
};
module.exports = wechat(config, wechat.text(function(message,req,res,next){
  console.log(message)
})
);
