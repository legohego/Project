//app/routes.js
module.exports = function(app, passport) {
	var myReports  = require('../app/models/myReports');
	var customers  = require('../app/models/customers');
	var employees  = require('../app/models/employees');
	var products  = require('../app/models/products');
	var queries  = require('../app/models/queries');
	//var obj  = require('../views/data.json');
	var Order_Details  = require('../app/models/Order_Details');
	var orders  = require('../app/models/orders'); 
	//=====================================
	//HOME PAGE (with login links) ========
	//=====================================



	app.get('/findOrdersVia_C_Name/:CustomerName',isLoggedIn, function (req, res) {
		var CustomerName = req.params.CustomerName;


		orders.find({'CustomerName': CustomerName}, function (err, foundObject) {
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
	app.get('/findOrdersDetailsVia_O_ID/:data1/:option1',isLoggedIn, function (req, res) {
		var data = req.params.data1;
		var option = req.params.option1;
		var query = {};
		query[option] = data;


		Order_Details.find(query, function (err, foundObject) {
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

	app.get('/findOrdersVia/:data/:option', function (req, res) {
		var data = req.params.data;
		var option = req.params.option;
		var query = {};
		query[option] = data;

		console.log(query);
		orders.find(query, function (err, foundObject) {
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



	app.get('/MyReports',isLoggedIn,function(req,res){

		var myemail=req.user.local.email;

		myReports.find({email:myemail},function(err,foundObject){
			if(err){
				console.log(err)
				res.send(err)}
			else{//start of outer else
				if (!foundObject) {
					res.status(404).send();
				} else {

					res.send(foundObject)
				}

			}
		})

	})



	app.get('/mytickets',isLoggedIn,function(req,res){

		var myemail=req.user.local.email; 
		console.log(req.user.local.email)
		queries.find({email:myemail},function(err,foundObject){
			if(err){
				console.log(err)
				res.send(err)}
			else{//start of outer else
				if (!foundObject) {
					res.status(404).send();
				} else {

					res.send(foundObject)
				}

			}
		})

	})



	app.get('/GetAllOpenTickets',isLoggedIn2,function(req,res){
		//user look for all open ticket, isloggedIn send params of api
		

		queries.find({ Status: { $ne: "Complete" } },function(err,foundqueries){
		//seches the database for tickets with status not Complete

			if(err){// if error resend error message
				console.log(err);
				res.status(404);
			}else{//else resend result and 200 status
				res.send(foundqueries);
				res.status(200);
			}

		})


	})	

	app.get('/findemployees',isLoggedIn,function(req,res){


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

	app.get('/findOrdersVia_Date/:OrderDate',isLoggedIn, function (req, res) {
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
	app.get('/findCustomers',isLoggedIn,function(req,res){


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

	app.get('/findOrdersVia_O_ID/:OrderID',isLoggedIn, function (req, res) {
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





	app.get('/findemployees/:data/:feild',isLoggedIn, function (req, res) {
		var data = req.params.data;
		
		
		
		var feild =req.params.feild;	
		var query = {};
		query[feild] = data;
		employees.find(query, function(err, foundObject){
			if (err) {//start of outer if
				console.log(err);
				res.status(500).send()
			} else {//start of outer else
				if (!foundObject.length) {
					res.status(404).send();
				} else  {
					res.send(foundObject);
					console.log(foundObject);
				}

			}
		})
	});



	app.get('/findOneCustomer/:data/:option3',isLoggedIn, function (req, res) {
		//var name=req.params.name;
		//var name=
		
		var Search =req.params.option3;	
		//req.body.reportURL;
		//query[name] = value;
		//var url=req.body.reportUR;

		//var query = { email: req.body.email }

		var query2 = {};
		query2[Search] = req.params.data;

		//console.log(query);console.log(query2);
		
		customers.find(query2, function (err, foundObject) {
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






	app.get('/sales/:data/:amount', isLoggedIn,function (req, res) {
		var data;
		var amount;
		if(req.params.amount == 10){
			amount = 10;

		}else if(req.params.amount == 5){

			amount = 5;
		}



		if(req.params.data == 1){
			data = 1;

		}else if(req.params.data == -1){

			data = -1;
		}

		console.log(data)


		orders.aggregate([
		                  {
		                	  $group:{ _id: '$CustomerID',  //$region is the column name in collection
		                	  count: {$sum: 1}} }, { "$sort": { "count": data } },
		                  // Optionally limit results
		                  { "$limit": amount}
		                	  ], function (err, foundObject) {
			if (err) {//start of outer if
				console.log(err);
				res.status(500).send()
			} else {//start of outer else
				if (!foundObject) {
					res.status(404).send();
				} else {

					res.json(foundObject);
				}

			}
		})
	});  






	app.get('/sales2/:data/:amount',isLoggedIn, function (req, res) {
		var data;
		var amount = req.params.amount; 
		if(req.params.amount == 20){
			amount = 20;

		}else if(req.params.amount == 15){

			amount = 15;
		}else if(req.params.amount == 10){
			amount = 10;

		}else if(req.params.amount == 5){

			amount = 5;
		}

		if(req.params.data == 1){
			data = 1;

		}else if(req.params.data == -1){

			data = -1;
		}

		console.log(data)


		Order_Details.aggregate([
		                         {
		                        	 $group:{ _id: '$ProductID',  //$region is the column name in collection
		                        	 count: {$sum: "$Quantity"}} }, { "$sort": { "count": data } },
		                         // Optionally limit results
		                         { "$limit": amount}
		                        	 ], function (err, foundObject) {
			if (err) {//start of outer if
				console.log(err);
				res.status(500).send()
			} else {//start of outer else
				if (!foundObject) {
					res.status(404).send();
				} else {

					res.json(foundObject);
				}

			}
		})
	});  



	app.get('/sales3/:data/:amount',isLoggedIn, function (req, res) {
		var data;
		var amount;
		if(req.params.amount == 10){
			amount = 10;

		}else if(req.params.amount == 5){

			amount = 5;
		}



		if(req.params.data == 1){
			data = 1;

		}else if(req.params.data == -1){

			data = -1;
		}

		console.log(data)


		orders.aggregate([
		                  {
		                	  $group:{ _id: '$EmployeeID',  //$region is the column name in collection
		                	  count: {$sum: 1}} }, { "$sort": { "count": data } },
		                  // Optionally limit results
		                  { "$limit": amount}
		                	  ], function (err, foundObject) {
			if (err) {//start of outer if
				console.log(err);
				res.status(500).send()
			} else {//start of outer else
				if (!foundObject) {
					res.status(404).send();
				} else {

					res.json(foundObject);
				}

			}
		})
	});  	





















	//put area
	
	
	
					
					
	
	
	app.put('/updateCustomers',isLoggedIn, function (req, res) {
		var id = req.body._id;//assigns the id from the body to id variable
		customers.findOne({_id: id}, function (err, foundObject) {//searches database for document with same id
			if(err) {//if error
				console.log(err);
				res.status(500).send()//return status 500
			}else {
				if (!foundObject) {//if document not found
					res.status(403).send();//send back 403 status
				} else {//else check to see what fields were updated and assign new values to document
					if (req.body.CustomerName != null && req.body.CustomerName !="") {
						foundObject.CustomerName  = req.body.CustomerName  ;
					}
					if (req.body.CompanyName != null&&req.body.CompanyName !="") {
						foundObject.CompanyName  = req.body.CompanyName ;
					}
					if (req.body.City != null&&req.body.City  !="") {
						foundObject.City  = req.body.City ;
					}
					if (req.body.Title != null&&req.body.Title !="") {
						foundObject.ContactTitle  = req.body.Title ;
					}if (req.body.PostalCode != null&&req.body.PostalCode!="") {
						foundObject.PostalCode  = req.body.PostalCode ;
					}if (req.body.Country != null&&req.body.Country !="") {
						foundObject.Country   = req.body.Country  ;
					}if (req.body.Address != null&&req.body.Address !="") {
						foundObject.Address   = req.body.Address  ;
					}if (req.body.Phone != null&&req.body.Phone !="") {
						foundObject.Phone   = req.body.Phone  ;
					}
					foundObject.save(function (err, updatedObject) {//save document
						if (err) {//if error
							console.log(err);
							res.status(500).send();//send back 500 and updated object
						} else {//send back
							res.status(200).send(updatedObject); }
					});
				}   }
		})}
			) 

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//
	
	

	app.put('/updateStaff',isLoggedIn, function (req, res) {
		var id = req.body._id;//gets json objects id
		employees.findOne({_id: id}, function (err, foundObject) {
			if(err) {//looks for object in databse with given id
				console.log(err);
				res.status(500).send()//if error resends status 500
			}else {//else
				if (!foundObject) {//if object not found
					res.status(403).send();//resend status 403
				} else {//else object found, update given fields
					if (req.body.LastName != null && req.body.LastName !="") {
						foundObject.LastName  = req.body.LastName  ;
					}if (req.body.FirstName != null&&req.body.FirstName !="") {
						foundObject.FirstName  = req.body.FirstName ;
					}if (req.body.City != null&&req.body.City  !="") {
						foundObject.City  = req.body.City ;
					}if (req.body.Title != null&&req.body.Title !="") {
						foundObject.Title  = req.body.Title ;
					}if (req.body.Address != null&&req.body.Address !="") {
						foundObject.Address  = req.body.Address ;
					}if (req.body.PostalCode != null&&req.body.PostalCode!="") {
						foundObject.PostalCode  = req.body.PostalCode ;
					}if (req.body.Country != null&&req.body.Country !="") {
						foundObject.Country   = req.body.Country  ;
					}if (req.body.HomePhone != null&&req.body.HomePhone !="") {
						foundObject.HomePhone  = req.body.HomePhone ;
					}if (req.body.ReportsTo != null&&req.body.ReportsTo !="") {
						foundObject.ReportsTo  = req.body.ReportsTo ;
					}
					foundObject.save(function (err, updatedObject) {//save objects
						if (err) {//if error 
							console.log(err);//console log error and send 500
							res.status(500).send();
						} else {//else resend updated object and status 200
							//res.send(updatedObject); 
						res.status(200).send(foundObject);}
					});}}
		})}) 






	app.put('/updateRequests',isLoggedIn, function (req, res) {
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

	//post area

	app.post('/addReports',isLoggedIn, function(req, res) {


		var newmyReports =  new myReports()
				newmyReports.email=req.body.email;
		newmyReports.myreports1 =req.body.myreports1;
		newmyReports.myreports2=req.body.myreports2;
		newmyReports.myreports3=req.body.myreports3;
		newmyReports.myreports4=req.body.myreports4;
		newmyReports.myreports5=req.body.myreports5;


		newmyReports.save(function(err){
			console.log(newmyReports);
			if(err){
				console.log(err);
				return res.status(500).send();
			}
			return res.status(200).send();
		})
	})


	app.post('/addCustomers',isLoggedIn, function(req, res) {


		var newcustomers  =  new customers()
		newcustomers.CustomerID=req.body.CustomerID;
		newcustomers.CustomerName =req.body.CustomerName;
		newcustomers.CompanyName=req.body.CompanyName;
		newcustomers.ContactTitle=req.body.ContactTitle;
		newcustomers.Address=req.body.Address;
		newcustomers.City =req.body.City;
		newcustomers.Country=req.body.Country;
		newcustomers.Phone=req.body.Phone;


		newcustomers.save(function(err){

			if(err){//if error send back the following
				console.log(err);
				return res.status(500).send("User Not added");
			}else //send back following
			return res.status(200).send("succesfully saved");
			
		})
	})	





	app.post('/addNewReport',isLoggedIn,function(req,res){

		var report =req.body.reportNumber;	
		//req.body.reportURL;
		//query[name] = value;
		var url=req.body.reportUR;

		var query = { email: req.body.email }

		var query2 = {};
		query2[report] = req.body.reportURL;

		console.log(query);console.log(query2);
		myReports.findOneAndUpdate(query, query2, function(err, doc){
			if (err) return res.send(500, { error: err });
			return res.send("succesfully saved");
		}); 


	})

//isLoggedIn fucntion is invoke followed by the callback function
	app.post('/NewProducts',isLoggedIn, function(req, res) {
		var newProduct =  new products()//new product object is created
		newProduct.ProductID=req.body.ProductID;//values assigned from http body
		newProduct.ProductName =req.body.ProductName;
		newProduct.SupplierID=req.body.SupplierID;
		newProduct.CategoryID=req.body.CategoryID;
		newProduct.QuantityPerUnit=req.body.QuantityPerUnit;
		newProduct.UnitPrice=req.body.UnitPrice;
		newProduct.UnitsInStock=req.body.StockLevel;
		newProduct.UnitsOnOrder=req.body.UnitsOnOrder;
		newProduct.ReorderLevel= req.body.ReorderLevel;
		newProduct.Discontinued=req.body.Discontinued;
		
		newProduct.save(function(err){//save the user in the mongo database
	
			if(err){//if error
				console.log(err);//console log error
				return res.status(500).send();//send back 500 status
			}
			return res.status(200).send();//eslse reurn status 200
		})
	})


	app.post('/CreateNewOrder',isLoggedIn,function(req,res){

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





	app.post('/userQueries',isLoggedIn,function(req,res){


		var newQuery = new queries();//need to create an instance of the object

		console.log(req.body.LastName);
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





	//process the login form



	//delete area


	app.delete('/deleteCustomers/:id',isLoggedIn,function(req,res) {
		var myid = req.params.id;//url varable is set to function variable
		//mongodb is search by customer document with give id
		customers.find({'_id':  myid}, function (err, foundObject) {
			if (err) {//if error return 500 & err message
				console.log(err);
				res.status(500).send("use has been deleted"+err)
			} 
			else 
			{//if no error
				if (!foundObject.length) {//if product not found
						//if document not found send 404(not found status)
					res.status(404).send();//send back not found
					res.status(404).send("user has not been deleted"+err);
				} else {//if found remove document
					
					customers.findOneAndRemove({_id:  myid}, function (err) {

						if (err) {//if error
							console.log(err);
							res.status(500).send("user has not been deleted"+err);
						}else{
							console.log(myid);
							//if no error
							res.status(200).send("user has been deleted");
						}
					}); 

				};
			}

		})});

	app.delete('/deleteEmployees/:id',isLoggedIn,function(req,res) {
		var id = req.params.id;

		employees.findOneAndRemove({_id: id}, function (err) {
			if (err) {
				console.log(err);
				res.status(500).send()
			}
			return res.status(200).send()

		})

	});   


	app.delete('/deleteproducts/:id',isLoggedIn,function(req,res) {
		var id = req.params.id;

		products.find({'ProductID': id}, function (err, foundObject) {
			if (err) {//if error
				console.log(err);
				res.status(500).send()
			} 
			else 
			{//if no error
				if (!foundObject) {//if product not found

					res.status(404).send();//send back not found
				} else {//if found

					products.findOneAndRemove({ProductID: id}, function (err) {
						if (err) {//if error
							console.log(err);
							res.status(500).send();
						}else{
							//if no error

							res.status(200).send();
						}
					}); 

				}		
			}
		})




	})





	app.delete('/deleteOrders',isLoggedIn,function(req,res) {
		var id = req.body.id;

		orders.findOneAndRemove({_id: id}, function (err) {
			if (err) {
				console.log(err);
				res.status(500).send()
			}
			return res.status(200).send()

		})

	});    


	app.delete('/deleteOrdersDetails',isLoggedIn,function(req,res) {
		var id = req.body.id;

		Order_Details.findOneAndRemove({_id: id}, function (err) {
			if (err) {
				console.log(err);
				res.status(500).send()
			}
			return res.status(200).send()

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





	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
	//=====================================
	//SIGNUP ==============================
	//=====================================
	//show the signup form



	/*app.get('/signup', function(req, res) {

 // render the page and pass in any flash data if it exists
 res.render('signup.ejs', { message: req.flash('signupMessage') });
});
	 */

	app.get('/signup', isLoggedIn2, function(req, res) {

		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	app.get('/reports', isLoggedIn, function(req, res) {

		res.render('reports.ejs');
	});
		app.get('/reports3', isLoggedIn, function(req, res) {

		res.render('reports3.ejs');
	});
	app.get('/testHome', isLoggedIn, function(req, res) {

		res.render('testHome.ejs');
	});

	app.get('/Admin', isLoggedIn2, function(req, res) {

		res.render('Admin.ejs',  { message: req.flash('signupMessage') });
	});
	//process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/logout', // redirect to the secure profile section
		failureRedirect : '/signup',
		 // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));


	app.get('/', function(req, res) {
		res.render('login.ejs',{ message: req.flash('loginMessage')}); // load the index.ejs file
	});//index


	app.get('/OrdersView',isLoggedIn, function(req, res) {
		res.render('OrdersView.ejs'); // load the index.ejs file
	});




	app.get('/login', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') }); 
	});


	//=====================================
	//PROFILE SECTION =====================
	//=====================================
	//we will want this protected so you have to be logged in to visit
	//we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn3, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	//=====================================
	//LOGOUT ==============================
	//=====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	//app.get('/data',isLoggedIn, function(req, res) {
	//	res.json(obj);
	//});

app.get('/tables',isLoggedIn, function(req, res) {
		res.render('Table_test.ejs', { message: req.flash('signupMessage') });
	});
	app.get('/CreateProfileReports',isLoggedIn, function(req, res) {
		res.render('CreateProfileReports.ejs', { message: req.flash('signupMessage') });
	});
	app.get('/AddPersonnelReport',isLoggedIn, function(req, res) {
		res.render('AddPersonnelReport.ejs', { message: req.flash('signupMessage') });
	});

	app.get('/chart', isLoggedIn,function(req, res) {

		res.render('Charts.ejs', { message: req.flash('signupMessage') });
	});


	app.get('/chart3',isLoggedIn, function(req, res) {

		res.render('chart3.ejs', { message: req.flash('signupMessage') });
	});

	app.get('/chart2', isLoggedIn, function(req, res) {

		res.render('chart2.ejs', { message: req.flash('signupMessage') });
	});


	app.get('/noAccess', isLoggedIn, function(req, res) {

		res.render('noAccess.ejs', { message: req.flash('signupMessage') });
	});


	app.get('/register', isLoggedIn2, function(req, res) {

		res.render('register.ejs',  { message: req.flash('signupMessage') });
	});

	app.get('/CreateTicket',isLoggedIn,function(req,res){

		res.render('CreateTicket.ejs');


	});



	app.get('/userRequests', isLoggedIn2, function(req, res) {

		res.render('Requests.ejs',  { message: req.flash('signupMessage') });
	});

	app.get('/ProductView',isLoggedIn, function(req, res, next) {
		res.render('Products.ejs', { title: 'Express' });
	});

	app.get('/AdminStaffView', isLoggedIn,function(req, res, next) {
		res.render('AdminStaffView.ejs', { title: 'Express' });
	});
	app.get('/ManStaffReports',isLoggedIn, function(req, res, next) {
		res.render('ManStaffView.ejs', { title: 'Express' });
	});


	app.get('/userQueries',isLoggedIn, function(req, res, next) {
		res.render('userQueries', { title: 'Express' });
	});   



	app.get('/AdminCustomers',isLoggedIn,function(req, res, next) {
		res.render('AdminCustomers.ejs');





	});

//chart4
	app.get('/chart4',isLoggedIn,function(req, res, next) {
		res.render('chart_4.ejs');





	});
	
	app.get('/tte',isLoggedIn,function(req, res, next) {
		res.render('testTableEdit.ejs');





	});
	//testTableEdit.ejs
	//app.get('/adminRequests',isLoggedIn,function(req,res){

		//res.render('adminRequest.ejs');


	//});


	app.get('/StaffTickets',isLoggedIn,function(req,res){

		res.render('updateRequests.ejs');


	});


	app.get('/ManCustomersReports',isLoggedIn, function(req, res, next) {
		res.render('ManCustomersReports.ejs' );





	});  
}
//route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	//if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
		return next();

	//if they aren't redirect them to the home page
	res.redirect('/');


}



function isLoggedIn3(req, res, next) {

	//if user is authenticated in the session, carry on 
	if (req.isAuthenticated()&& req.user.local.isAdmin === true){

		res.redirect('/Admin');

	}else if(req.isAuthenticated()&& req.user.local.isAdmin === false){


		return next();
	}else{
		//if they aren't redirect them to the home page
		res.redirect('/noAccess');
	}


}


function isLoggedIn2(req, res, next) {

	//if user is authenticated in the session, carry on 
	if (req.isAuthenticated()&& req.user.local.isAdmin === true)


		return next();

	//if they aren't redirect them to the home page
	res.redirect('/noAccess');
}






