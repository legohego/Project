/**
 * Created by Cóilín on 09/03/2016.
 */




var mongoose = require('mongoose');

var querySchema = mongoose.Schema(

    {
        query_date:{ type : Date, default: Date.now,select: true  },
        querySubject: { type: String, select: true },
        queryBody: { type: String, select: true },
        firstName: { type: String, select: true },
        lastName: { type: String, select: true },
        email:{ type: String, select: true },
        UrgentLevel:{ type: String, select: true,default: 'Low' },
        Status:{type:String, select:true, default:'Registered'},
        Notes:{type:String}
    }
);

module.exports = mongoose.model('queries',querySchema);


