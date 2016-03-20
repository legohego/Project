/**
 * Created by Cóilín on 29/02/2016.
 */

var mongoose = require('mongoose');

var CategoriesSchema  = mongoose.Schema(
    {   CategoryID:Number,
        CategoryName:String,
        Description:String
    });

module.exports = mongoose.model('categories',  CategoriesSchema);