'use strict'

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  number: {
    type: String, 
    required: true, 
    maxLength: 5
  },
  name: {
    type: String, 
    required: true, 
    maxLength: 100
  },
  color: {
    type: String, 
    required: true, 
    maxLength: 7
  },
  file: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model(
  'Bus', schema, process.env.MONGODB_COLLECTION
)
