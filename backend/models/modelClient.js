const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const clientSchema = new Schema({
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
  designation: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
});

module.exports = model('Client', clientSchema);