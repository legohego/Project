"use strict";

var mongoose = require('mongoose');

var customerSchema  = mongoose.Schema(
  {
    CustomerID:String,
    CompanyName:String,
    ContactName:String,
    ContactTitle:String,
    Address:String,
    City:String,
    Region:String,
    PostalCode:Number,
    Country:String,
    Phone: String,
    Fax: String
  });


module.exports = mongoose.model('customers',  customerSchema);




