var mongoose = require('mongoose');

Order_Details_Schema = mongoose.Schema({

OrderID:Number,
ProductID:Number,
UnitPrice:Number,
Quantity:Number,
Discount:Number

})

module.exports= mongoose.model('Order_Details',Order_Details_Schema );