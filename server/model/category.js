var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define a schema.
var categorySchema = new Schema({
  id: Number,
  name: String,
  completed: Boolean,
  percentage: Number,
  tasks: [{ value: String, completed: Boolean }]
});

// Create a model.
var Category = mongoose.model('Category', categorySchema);

module.exports = Category;