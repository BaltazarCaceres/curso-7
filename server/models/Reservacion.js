const mongoose = require('mongoose');

const reservacionSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  guests: Number,
});

module.exports = mongoose.model('Reservacion', reservacionSchema);