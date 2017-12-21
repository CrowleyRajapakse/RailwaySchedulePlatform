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
    default: 'first class',
    required: 'Please select Ticket class',
    trim: true
  },
  refNo: {
    type: Number,
    default: '45632',
    required: 'Please fill Ticket number',
    trim: true
  },
  from: {
    type: String,
    default: 'Maradana',
    required: 'Please select Start station',
    trim: true
  },
  to: {
    type: String,
    default: 'Fort',
    trim: true,
    required: 'Please select End station'
  },
  ttype: {
    type: String,
    default: 'Single',
    required: 'Please select Ticket type',
    trim: true
  },
  price: {
    type: Number,
    default: '350.00',
    required: 'Please fill Ticket price',
    trim: true
  },
  tdate: {
    type: String,
    default: Date.now,
    required: 'Please select Ticket date',
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
