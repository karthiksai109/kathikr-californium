const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Userd' }]
  });
  module.exports=mongoose.model('Practice',personSchema)