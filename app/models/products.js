var mongoose = require('mongoose');

var productSchema = mongoose.Schema(
    {
        ProductID:Number,
        ProductName: String,
        SupplierID:Number,
        CategoryID:Number,
        QuantityPerUnit:String,
        UnitPrice: Number,
        UnitsInStock:Number,
        UnitsOnOrder:Number,
        ReorderLevel:Number,
        Discontinued:Number
    });

module.exports = mongoose.model('products',  productSchema);