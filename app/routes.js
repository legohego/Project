// app/routes.js
module.exports = function(app, passport) {

var customers  = require('../app/models/customers');
var employees  = require('../app/models/employees');
var products  = require('../app/models/products');
var queries  = require('../app/models/queries');

var Order_Details  = require('../app/models/Order_Details');
var orders  = require('../app/models/orders'); 
// =====================================
// HOME PAGE (with login links) ========
// =====================================

app.get('/makeRequests',function(req,res){

    res.render('makeRequests.ejs');


});


app.get('/myRequests',function(req,res){

    var myemail=req.user.local.email; 

    queries.find({email:myemail},function(err,foundqueries){
        if(err){
            console.log(err)
            res.send(err)}
        else{
            res.send(foundqueries);
        res.status(200);


    }})

})

 app.get('/adminRequests',function(req,res){

    res.render('adminRequest.ejs');


});


 app.get('/updateRequests',function(req,res){

    res.render('updateRequests.ejs');


});



app.get('/getRequest',function(req,res){

queries.find({ Status: { $ne: "Complete" } },function(err,foundqueries){


    if(err){
        console.log(err);
        res.status(404);
    }else{
        res.send(foundqueries);

    }

})


})



app.put('/updateStaff', function (req, res) {
var id = req.body._id;
console.log(req.body._id);
    console.log(req.body.LastName );
    console.log(req.body.FirstName);
employees.findOne({_id: id}, function (err, foundObject) {
    if(err) {//start of outer if
        console.log(err);
        res.status(500).send()
    }else {//start of outer else
        if (!foundObject) {
            res.status(403).send();
        } else {
             if (req.body.LastName != null) {
                foundObject.LastName  = req.body.LastName  ;
            }
            if (req.body.FirstName != null) {
                foundObject.FirstName  = req.body.FirstName ;
            }
              if (req.body.City != null) {
                foundObject.City  = req.body.City ;
            }
            if (req.body.Title != null) {
                foundObject.Title  = req.body.Title ;
            }
            if (req.body.Address != null) {
                foundObject.Address  = req.body.Address ;
            }
            
             if (req.body.City != null) {
                foundObject.City  = req.body.City ;
            }
            if (req.body.PostalCode != null) {
                foundObject.PostalCode  = req.body.PostalCode ;
            }
               if (req.body.Country != null) {
                foundObject.Country   = req.body.Country  ;
            }
            
             if (req.body.HomePhone != null) {
                foundObject.HomePhone  = req.body.HomePhone ;
            }
            if (req.body.ReportsTo != null) {
                foundObject.ReportsTo  = req.body.ReportsTo ;
            }
           
            foundObject.save(function (err, updatedObject) {
                if (err) {
                    console.log(err);
                    res.status(500).send();
                } else {
                    res.send(updatedObject); }
            });
        }   }
})}
) 






app.put('/updateRequests', function (req, res) {
var id = req.body._id;
console.log(id);
queries.findOne({_id: id}, function (err, foundObject) {
    if(err) {//start of outer if
        console.log(err);
        res.status(500).send()
    }else {//start of outer else
        if (!foundObject) {
            res.status(403).send();
        } else {
            if (req.body.Status != "") {
                foundObject.Status = req.body.Status;
            }
            if (req.body.Notes != "") {
                foundObject.Notes = req.body.Notes;
            }
            foundObject.save(function (err, updatedObject) {
                if (err) {
                    console.log(err);
                    res.status(500).send();
                } else {
                    res.send(updatedObject); }
            });
        }   }
})
}) 




app.post('/NewProducts', function(req, res) {
 

    var newProduct =  new products()
        newProduct.ProductID=req.body.ProductID;
         newProduct.ProductName =req.body.ProductName;
        newProduct.SupplierID=req.body.SupplierID;
        newProduct.CategoryID=req.body.CategoryID;
        newProduct.QuantityPerUnit=req.body.QuantityPerUnit;
        newProduct.UnitPrice=req.body.UnitPrice;
        newProduct.UnitsInStock=req.body.StockLevel;
       newProduct.UnitsOnOrder=req.body.UnitsOnOrder;
        newProduct.ReorderLevel= req.body.ReorderLevel;
        newProduct.Discontinued=req.body.Discontinued;


    newProduct.save(function(err){
        console.log(newProduct);
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        return res.status(200).send();
    })
})


















app.post('/userQueries',function(req,res){


var newQuery = new queries();//need to create an instance of the object


newQuery .querySubject= req.body.querySubject;
    newQuery .queryBody= req.body.queryBody;
    newQuery .firstName=req.body.firstName;
    newQuery .lastName= req.body.LastName;
    newQuery .email=req.body.email;
    newQuery .UrgentLevel=req.body.UrgentLevel;
    newQuery .lastName= req.body.LastName;
    newQuery .email=req.body.email;
    newQuery .query_date=req.body.query_date;
    newQuery .Notes="Default";


newQuery.save(function(err){

    if(err){

        res.send(newQuery );
        return res.status(500).send;
    }
return res.status(200).send();

})


})



app.get('/', function(req, res) {
    res.render('index.ejs'); // load the index.ejs file
});


app.get('/OrdersView', function(req, res) {
    res.render('OrdersView.ejs'); // load the index.ejs file
});



 app.get('/Customers', function(req, res) {
    res.render('Customers.ejs'); // load the index.ejs file
});
app.get('/login', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('login.ejs', { message: req.flash('loginMessage') }); 
});

// process the login form
app.get('/findemployees',function(req,res){


employees.find({}, function(err,foundData){
    if(err){
        console.log(err);
        res.status(404);
    }
    else
    {
        repsonceObject = foundData;
    }
    res.send(repsonceObject)
})
});

app.get('/findOrdersVia_Date/:OrderDate', function (req, res) {
var OrderDate = req.params.OrderDate;


orders.find({'OrderDate': {'$regex': OrderDate}}, function (err, foundObject) {
    if (err) {//start of outer if
        console.log(err);
        res.status(500).send()
    } else {//start of outer else
        if (!foundObject) {
            res.status(404).send();
        } else {

            res.send(foundObject)
        }

    }
})
});

app.get('/findOrdersVia_O_ID/:OrderID', function (req, res) {
var OrderID = req.params.OrderID;


orders.find({'OrderID': OrderID}, function (err, foundObject) {
    if (err) {//start of outer if
        console.log(err);
        res.status(500).send()
    } else {//start of outer else
        if (!foundObject) {
            res.status(404).send();
        } else {

            res.send(foundObject)
        }

    }
})
});    
app.get('/findOrdersVia_C_ID/:CustomerID', function (req, res) {
var CustomerID = req.params.CustomerID;


orders.find({'CustomerID': CustomerID}, function (err, foundObject) {
    if (err) {//start of outer if
        console.log(err);
        res.status(500).send()
    } else {//start of outer else
        if (!foundObject) {
            res.status(404).send();
        } else {

            res.send(foundObject)
        }

    }
})
});    

//do this when u come back
app.get('/findOrdersDetailsVia_O_ID/:OrderID', function (req, res) {
var OrderID = req.params.OrderID;

console.log(OrderID);
Order_Details.find({'OrderID': OrderID}, function (err, foundObject) {
    if (err) {//start of outer if
        console.log(err);
        res.status(500).send()
    } else {//start of outer else
        if (!foundObject) {
            res.status(404).send();
        } else {

            res.send(foundObject)
        }

    }
})
});


app.post('/CreateNewOrder',function(req,res){

  var newOrders = new orders;

 var newOrdersDet = new Order_Details;


   newOrders.OrderID=req.body.OrderID;
   newOrders.CustomerID=req.body.CustomerID;
   newOrders.EmployeeID=req.body.EmployeeID;
   newOrders.OrderDate=req.body.OrderDate;
   newOrders.RequiredDate=req.body.RequiredDate;
   newOrders.ShippedDate=req.body.ShippedDate;
   newOrders.ShipVia=req.body.ShipVia;
   newOrders.Freight=req.body.Freight;
   newOrders.ShipName=req.body.ShipName;
   newOrders.ShipAddress=req.body.ShipAddress;
   newOrders.ShipCity=req.body.ShipCity;
   newOrders.ShipRegion=req.body.ShipRegion;
   newOrders.ShipPostalCode=req.body.ShipPostalCode;
   newOrders.ShipCountry=req.body.ShipCountry; 


  /*  var OrderDetailGroup=[
  {
       "OrderID":1111111,
    "ProductID":1,
    "UnitPrice":1,
    "Quantity":1,
    "Discount":1},
    {
    "OrderID":1,
    "ProductID":1,
    "UnitPrice":1,
    "Quantity":1,
    "Discount":1}
    ];*/

    //= req.body.orderDetailList;
   /* newOrdersDet.OrderID=req.body.OrderID;
    newOrdersDet.PruductID=req.body.PruductID;
    newOrdersDet.UnitPrice=req.body.Unit;
    newOrdersDet.Quanity=req.body.Unit;      
    newOrdersDet.Discount=req.body.Discount;*/


    newOrders.save(function(err){

    if(err){


            return res.status(500).send;
        }
    return res.status(200).send();
        res.send(newOrders);
console.log(newOrders);
    })

   newOrdersDet.collection.insert(OrderDetailGroup, function onInsert(err, docs) {
if (err) {
    // TODO: handle error
} else {
    console.info('potatoes were successfully stored.');
}
});



})



app.delete('/deleteCustomers',function(req,res) {
var id = req.body.id;

Customers.findOneAndRemove({_id: id}, function (err) {
    if (err) {
        console.log(err);
        res.status(500).send()
    }
    return res.status(200).send()

})

});




app.delete('/deleteEmployees/:id',function(req,res) {
var id = req.params.id;

employees.findOneAndRemove({_id: id}, function (err) {
    if (err) {
        console.log(err);
        res.status(500).send()
    }
    return res.status(200).send()

})

});   


app.delete('/deleteproducts/:id',function(req,res) {
var id = req.params.id;

products.findOneAndRemove({ProductID: id}, function (err) {
    if (err) {
        console.log(err);
        res.status(500).send()
    }
    return res.status(200).send()

})

});    


app.delete('/deleteOrders',function(req,res) {
var id = req.body.id;

orders.findOneAndRemove({_id: id}, function (err) {
    if (err) {
        console.log(err);
        res.status(500).send()
    }
    return res.status(200).send()

})

});    


app.delete('/deleteOrdersDetails',function(req,res) {
var id = req.body.id;

Order_Details.findOneAndRemove({_id: id}, function (err) {
    if (err) {
        console.log(err);
        res.status(500).send()
    }
    return res.status(200).send()

})

});    




app.get('/findOneEmployees/:name', function (req, res) {
var name=req.params.name;

employees.findOne({FirstName: name}, function (err, foundObject) {
    if (err) {//start of outer if
        console.log(err);
        res.status(500).send()
    } else {//start of outer else
        if (!foundObject) {
            res.status(404).send();
        } else {
            repsonceObject = foundObject
            res.send(repsonceObject)
        }

    }
})
});
    
    
    
    app.get('/findOneCustomer/:id', function (req, res) {
var id=req.params.id;

customers.findOne({_id: id}, function (err, foundObject) {
    if (err) {//start of outer if
        console.log(err);
        res.status(500).send()
    } else {//start of outer else
        if (!foundObject) {
            res.status(404).send();
        } else {
            repsonceObject = foundObject
            res.send(repsonceObject)
            console.log(200)
        }

    }
})
});


  /*app.get('/max',function(req,res){

  var  data= [
    { Company: 'Terry', Number_of_Order: 10, b: 90 },
    { Company: 'Eanna', Number_of_Order: 10, b: 90 },
    {  Company: 'John', Number_of_Order: 50,  b: 40 },
    { Company: 'Ann', Number_of_Order: 75,  b: 65 },
    { Company: 'Joe', Number_of_Order: 50,  b: 40 },
    { Company: 'Mary', Number_of_Order: 75,  b: 65 },
    { Company: 'Fred', Number_of_Order: 100, b: 90 },
    { Company: 'max', Number_of_Order: 100, b: 90 }]
  

    res.send(data);

}); */ 
    
    
    
app.get('/findCustomers',function(req,res){


customers.find({}, function(err,foundData){
    if(err){
        console.log(err);
        res.status(404);
    }
    else
    {
        repsonceObject = foundData;
    }
    res.send(repsonceObject)
})
});

app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));
// =====================================
// SIGNUP ==============================
// =====================================
// show the signup form



/*app.get('/signup', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('signup.ejs', { message: req.flash('signupMessage') });
});
 */

  app.get('/signup', isLoggedIn2, function(req, res) {

     res.render('signup.ejs', { message: req.flash('signupMessage') });
});
/*app.get('/reports', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('reports.ejs', { message: req.flash('signupMessage') });
});*/

app.get('/reports', isLoggedIn, function(req, res) {

    res.render('reports.ejs', { message: req.flash('signupMessage') });
});


  app.get('/admin', isLoggedIn2, function(req, res) {

    res.render('admin.ejs',  { message: req.flash('signupMessage') });
});
// process the signup form
app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

// =====================================
// PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
app.get('/profile', isLoggedIn3, function(req, res) {
    res.render('profile.ejs', {
        user : req.user // get the user out of session and pass to template
    });
});

// =====================================
// LOGOUT ==============================
// =====================================
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});



app.get('/fc', isLoggedIn, function(req, res) {

    res.render('firstChart.ejs', { message: req.flash('signupMessage') });
});

app.get('/noAccess', isLoggedIn, function(req, res) {

    res.render('noAccess.ejs', { message: req.flash('signupMessage') });
});


  app.get('/register', isLoggedIn2, function(req, res) {

    res.render('register.ejs',  { message: req.flash('signupMessage') });
});




 app.get('/userRequests', isLoggedIn2, function(req, res) {

    res.render('Requests.ejs',  { message: req.flash('signupMessage') });
});

app.get('/ProductView', function(req, res, next) {
res.render('Products.ejs', { title: 'Express' });
});

app.get('/StaffView', function(req, res, next) {
res.render('StaffView.ejs', { title: 'Express' });
});
app.get('/StaffView2', function(req, res, next) {
res.render('StaffView2.ejs', { title: 'Express' });
});


app.get('/userQueries', function(req, res, next) {
res.render('userQueries', { title: 'Express' });
});   




app.get('/Customers', function(req, res, next) {
res.render('Customers.ejs', { title: 'Express' });





});
    
  app.get('/Customers2', function(req, res, next) {
res.render('Customers2.ejs', { title: 'Express' });





});  
}
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

// if user is authenticated in the session, carry on 
if (req.isAuthenticated())
    return next();

// if they aren't redirect them to the home page
res.redirect('/');


}



function isLoggedIn3(req, res, next) {

// if user is authenticated in the session, carry on 
if (req.isAuthenticated()&& req.user.local.isAdmin === true){

    res.redirect('/admin');

}else if(req.isAuthenticated()&& req.user.local.isAdmin === false){


    return next();
}else{
// if they aren't redirect them to the home page
res.redirect('/noAccess');
}


}


function isLoggedIn2(req, res, next) {

// if user is authenticated in the session, carry on 
if (req.isAuthenticated()&& req.user.local.isAdmin === true)


    return next();

// if they aren't redirect them to the home page
res.redirect('/noAccess');
}




