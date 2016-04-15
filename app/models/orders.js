/**
 * Created by Cóilín on 29/02/2016.
 */

var mongoose = require('mongoose');
var OrderSchema  = mongoose.Schema(
    {
        OrderID:Number,
        CustomerID:String,
        Stores:String,
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


module.exports = mongoose.model('order',  OrderSchema);