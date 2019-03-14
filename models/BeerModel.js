// Comment to update heroku stack
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Review = require('./ReviewModel');

var BeerSchema = new Schema({
  name: String,
  style: String,
  image_url: String,
  abv: Number,
  reviews: [Review.ReviewSchema]
});

var Beer = mongoose.model('Beer', BeerSchema);

module.exports = Beer;
