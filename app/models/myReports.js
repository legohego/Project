var mongoose = require('mongoose');

var  myReportsSchema  = mongoose.Schema(
    {   email        : String,
     myreports1:{type:String,Default:"#/getCustomers2"},
		myreports2:{type:String,Default:"#/ProductView"},
		myreports3:{type:String,Default:"#/ProductView"},
		myreports4:{type:String,Default:"#/ProductView"},
    
    });

module.exports = mongoose.model('myReport',  myReportsSchema);
