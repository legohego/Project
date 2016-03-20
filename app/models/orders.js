/**
 * Created by Cóilín on 29/02/2016.
 */

var mongoose = require('mongoose');
var OrdersSchema  = mongoose.Schema(
    {
        OrderID:Number,
        CustomerID:String,
        EmployeeID:Number,
        OrderDate:String,
        RequiredDate:String,
        ShippedDate:String,
        ShipVia:Number,
        Freight:Number,
        ShipName:String,
        ShipAddress:String,
        ShipCity:String,
        ShipRegion: String,
        ShipPostalCode: Number,
        ShipCountry: String,
    });


module.exports = mongoose.model('orders',  OrdersSchema);