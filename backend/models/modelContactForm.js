const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const contactFormSchema = new Schema({
  full_name: { type: String, required: true, trim: true },
  email:     { type: String, required: true, lowercase: true, trim: true, unique : true },
  mob_no:    { type: String, required: true, trim: true, unique : true },
  city:      { type: String, required: true, trim: true },
}, { timestamps: true });

module.exports = model('ContactForm', contactFormSchema);
