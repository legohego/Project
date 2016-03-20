/**
 * Created by Cóilín on 29/02/2016.
 */
var mongoose = require('mongoose');

var  employeesSchema  = mongoose.Schema(
    {
        EmployeeID:Number,
        LastName:String,
        FirstName:String,
        Title:String,
        TitleOfCourtesy:String,
        BirthDate:String,
        HireAddress:String,
        Address:String,
        City:String,
        Region:String,
        PostalCode:String,
        Country:String,
        HomePhone:String,
        Extension:String,
        ReportsTo:String,
        PhotoPatch:String
    });

module.exports = mongoose.model('employees',  employeesSchema);

