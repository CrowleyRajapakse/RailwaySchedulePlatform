'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Ticket Schema
 */
var TicketSchema = new Schema({
  tclass: {
    type: String,
    default: '',
    required: 'Please select Ticket class',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Ticket', TicketSchema);
