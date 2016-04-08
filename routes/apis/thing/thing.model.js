/**
 * Created by ericw on 2016/4/7.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema(
    {
        type:String,
        name:String,
        price:Number
    }
)

exports.= mongoose.model('thing',Schema);

thing.save(function(err){
    if(err) return handleError(err);
})