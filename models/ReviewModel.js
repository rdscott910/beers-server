var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  name: String,
  text: String
});

var ReviewModel = mongoose.model('Review', ReviewSchema);

module.exports = {
  ReviewSchema,
  ReviewModel
};
