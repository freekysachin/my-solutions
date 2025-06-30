const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  imgPath: {           
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

module.exports = model('Project', projectSchema);