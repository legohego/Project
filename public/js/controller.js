
 //<script  src="../js/xeditable"></script>  
//<script  src="../js/xeditable.min"></script>  
// <script  src="../js/xeditable.min"></script> 
	//<script  src="../js/xeditable"></script> 
//,"xeditable"
var myApp = angular.module('myApp', ['ngRoute',"xeditable"]);

 myApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
myApp.config(function($routeProvider){

	$routeProvider

	//mangers
	.when('/StaffReports',{
		templateUrl:'/AdminStaffView',
		controller:'StaffController'

	})
	.when('/ManCustomersReports',{
		templateUrl:'/AdminCustomers',
		controller:'CustomerController'

	})
	
	.when('/tables',{
		templateUrl:'/tables',
		//controller:'ManagerStaffContr'

	})
	
	//.when('/ManCustomersReports',{
		//templateUrl:'/ManCustomersReports',
		//controller:'CustomerController2'

	//})
	
	.when('/getCustomers',{
		templateUrl:'/AdminCustomers',
		controller:'CustomerController'

	})
	
	
	.when('/ProductView',{
		templateUrl:'/ProductView',
		controller:'ProductController'

	})
	.when('/chart5',{
		templateUrl:'/chart5',
		
		controller:'chartsController'

	})

	.when('/charts',{
		templateUrl:'/chart',
	
		controller:'chartsController'

	})
	.when('/CreateProfileReports',{
		templateUrl:'/CreateProfileReports',
		controller:'ReportProController'

	})
	.when('/AddPersonnelReport',{
		templateUrl:'/AddPersonnelReport',
		controller:'ReportProController'

	})


	
	.when('/StoreSales',{
		templateUrl:'/StoreSales',
		controller:'chartsController'

	})
	
	.when('/ProductChartsView',{
		templateUrl:'/ProductChartsView',
		controller:'chartsController'

	})
		.when('/CustomersOrdersChart',{
		templateUrl:'/CustomersOrdersChart',
		controller:'chartsController'

	})
	

	
	.when('/AdminStaffView',{
		templateUrl:'/AdminStaffView',
		controller:'StaffController'

	})
	.when('/CreateTicket',{
		templateUrl:'/CreateTicket',
		controller:'userQueriesController'

	})
	
	.when('/StaffTickets',{
		templateUrl:'/StaffTickets',
		controller:'URController'

	})
	.when('/reg',{
		templateUrl:'/register',
		controller:'regController'

	})

	.when('/OrdersView',{
		templateUrl:'/OrdersView',
		controller:'OrdersController'

	})
//.when('/getRequests',{
		//templateUrl:'/adminRequests',
		//controller:'URController'

	//})


});
myApp.controller('test',['$scope','$http', function(a,b){

	

	
	
	
	
	
	
	
	
	
	a.me=function(){ 
		b.get("/MyReports").success(function(result){


			a.results =result;})

		.error(function(data,status){


		})		
	}
}])

myApp.controller('StaffController',['$scope','$http', function(a,b){
 a.sortType  = 'LastName'; // set the default sort type
 a.sortReverse  = false;  
	a.searchFish   = '';
	
	a.mySort=function(){
		a.sortReverse = !a.sortReverse;
	}
	
	
	a.removestaff = function(index) {
	index=index	-1;
    a.rules.splice(index, 1);
		a.FindAllStaff();
		//a.showAllStaffFuc();
  };
		a.DeleteStaff2 =function(){
		b.delete("/deleteEmployees/"+ a.myid)
		.success(function(status){
			a.DeletedStaffFun();
			a.FindAllStaff();
		console.log(done);
		console.log(status);

		})
		.error(function(data,status){
			console.log(status);
			a.StaffNotDeleted();

		})
	}
	
	a.UpdateStaff2 =function(_id,PostalCode,City,Title,FirstName,LastName,Region){ 


		var update ={
				_id:_id,
				LastName:LastName,
				FirstName:FirstName,
				City:City,
				Title:Title,
				Region:Region,
				PostalCode:PostalCode,
				
		};


		b({
			url: '/updateStaff', // No need of IP address
			method: 'PUT',
			data: update,
			headers: {'Content-Type': 'application/json'}

		}).success(function(){
			a._id="";
			a.LastName="";
			a.FirstName="";
			a.City="";
			a.Title="";
			a.Address="";
			Region="";
			a.Region="";
			a.PostalCode="";
			a.Country="";
			a.HomePhone="";
			a.ReportsTo="";
			console.log(update);
			a.updateFun();
		}).error(function(){a.NotUpdateFun();})

	}

	a.FindAllStaff =function(){
		b.get("/findemployees").success(function(result){
			a.rules =result;
			console.log(result);
			a.showAllStaffFuc();
			a.showStaff = false;
			a.showStaffSearch = false;
			a.DeleteShow= false;
			a.showRegStaff=false;
			a.showUpdateStaff=false;
			a.NotFound=false;
			a.box="5px 5px grey"
					//add
a.NotFound=false;
					a.StaffNotDeleted=false;
			a.DeletedStaff=false;
			a.NotUpdate=false;
			a.update=false;


		}).error(function(data,status){
		})
	}

	a.NotFound=false;

	a.NotFoundFuc= function() {

		a.NotFound=true;
	}




	a.showUpdateStaff = !a.showUpdateStaff;
//:Search/:Data

	a.FindOneStaff =function(){
		b.get("/findemployees/"+a.data6+"/"+a.option3).success(function(result){
			console.log(result);
			a.empes =result;
			a.NotFound=false;
			a.name=" ";

			a.showStaff=true;
			a.showAllStaff = false;
			a.DeleteShow= false;
			a.showRegStaff=false;

		})
		.error(function(data,status){
			a.NotFound=true;
			a.showStaff=false;
		})
	};

	a.DeleteStaff =function(){
		b.delete("/deleteEmployees/"+ a.id)
		.success(function(status){a.DeletedStaffFun();
		console.log(done);
		console.log(status);

		})
		.error(function(data,status){
			console.log(status);
			a.StaffNotDeleted();

		})
	}

	a.hold =function(myid){
		a.myid=myid;
	}

	a.UpdateStaff =function(){ 


		var update ={
				_id:a._id,
				LastName:a.LastName,
				FirstName:a.FirstName,
				City:a.City,
				Title:a.Title,
				Address:a.Address,
				Region:a.Region,
				PostalCode:a.PostalCode,
				Country:a.Country,
				HomePhone:a.HomePhone,
				ReportsTo:a.ReportsTo
		};


		b({
			url: '/updateStaff', // No need of IP address
			method: 'PUT',
			data: update,
			headers: {'Content-Type': 'application/json'}

		}).success(function(){
			a._id="";
			a.LastName="";
			a.FirstName="";
			a.City="";
			a.Title="";
			a.Address="";
			Region="";
			a.Region="";
			a.PostalCode="";
			a.Country="";
			a.HomePhone="";
			a.ReportsTo="";
			console.log(update);
			a.updateFun();
		}).error(function(){a.NotUpdateFun();})

	}

	a.showRegStaff=false;
	a.showRegStaffFuc= function() {
		a.showRegStaff = !a.showRegStaff;
		a.showUpdateStaff=false;
		a.showAllStaff=false;
		a.DeleteShow= false;
		a.showAllStaff = false;
		a.showStaffSearch = false;
		a.NotFound=false;
	} 

	a.showUpdateStaff=false;
	a.showUpdateStaffFuc= function() {
		a.showUpdateStaff = !a.showUpdateStaff;
		a.showRegStaff= false;
		a.showStaffSearch = false;
		a.showStaff = false;
		a.showAllStaff=false;
		a.NotFound=false;
		a.DeleteShow= false;



		//add

		a.StaffNotDeleted=false;
		a.DeletedStaff=false;
		a.NotUpdate=false;
		a.update=false;


	} 



	a.showAllStaff=false;
	a.showAllStaffFuc= function() {
		a.showAllStaff = !a.showAllStaff;
		a.showRegStaff= false;

	}
	a.DeleteShow= false;
	a.DeleteShowfunc = function() {
		a.DeleteShow = !a.DeleteShow;
		a.showStaffSearch = false;
		a.showAllStaff=false;
		a.showRegStaff= false;
		a.NotFound=false;
		a.showUpdateStaff=false;
		//add
		a.StaffNotDeleted=false;
		a.DeletedStaff=false;
		a.NotUpdate=false;
		a.update=false;



	}
	a.showAllStaff = false;
	a.DeleteShowFunc = function() {
		a.DeleteShow = !a.DeleteShow;
		a.showRegStaff= false;
	}
	a.showStaff = false;
	a.showStaffFunc = function() {
		a.showStaff = !a.showStaff;
		a.showRegStaff= false;

	}
	a.showStaffSearch = false;
	a.showStaffSearchFunc =function() {
		a.showStaffSearch = !a.showStaffSearch;
		a.showAllStaff = false;
									 a.DeleteShow= false;
								     a.showRegStaff= false;
									 a.showUpdateStaff=false;

		//aded
		a.box="5px 5px grey";
		a.StaffNotDeleted=false;
		a.DeletedStaff=false;
		a.NotUpdate=false;
		a.update=false;

	}
	a.hideStaffSearch = function() {
		a.showStaffSearch = false;
		a.showStaff = false;

	}
	a.clearStaffSearch = function() {
		a.option3="";
		a.data6="";
	} 
	a.clearStaffDelete = function() { 
		a.id=""
	} 
	a.hideStaffDelete = function() {
		a.DeleteShow= false;
	} 

	a.update=false;
	a.updateFun=function(){ 
		a.update=!a.update;
	}
	a.NotUpdate=false;
	a.NotUpdateFun	=function(){
		a.NotUpdate=!a.NotUpdate;
	}
	a.DeletedStaff=false;
	a.DeletedStaffFun	=function(){ 
		a.DeletedStaff=!a.DeletedStaff;
	}
	a.StaffNotDeleted=false;
	a.StaffNotDeletedFun	=function(){ 
		a.StaffNotDeleted=!a.StaffNotDeleted;
	}

}]);

myApp.controller('CustomerController',['$scope','$http', function(a,b){

	
	//a.sortBy =function(){
	//	a.sortType  = a.option2;
	//}
	
	
	
		
  a.removeUser = function(index) {
	index=index	-1;
    a.bosses.splice(index, 1);
  };
	
	
	
	
	
	
	
	
	
	
		
	a.UpdateCustomer =function(_id,PostalCode,City,ContactTitle,CompanyName,ContactName){ 


		var update ={
				_id:_id,
				CompanyName:CompanyName,
				ContactName:ContactName,
				City:City,
				Title:ContactTitle,
				City:City,
				PostalCode:PostalCode,
				
				
				
		};


		b({
			url: '/updateCustomers', // No need of IP address
			method: 'PUT',
			data: update,
			headers: {'Content-Type': 'application/json'}

		}).success(function(){
			
			console.log(update);
			a.updateFun();
		}).error(function(){a.NotUpdatedfun();})}
	
	
	
	a.hold =function(myid){
		a.myid=myid;
	}								   
									   
									   
									   
									   
	a.DeleteCustomer2 =function(){
		console.log(a.myid);
		b.delete("/deleteCustomers/"+a.myid)
		.success(function(status){
			a.CustomerdeleteFuc();
			console.log(done);
			console.log(status);
			a.AllCustFun();
			

		})
		.error(function(data,status){
			console.log(status);
			a.NotDeleteFuc();

		})
	}
	a.CustomerUpdated =false;
	
	a.updateFun =function(){
		a.CustomerUpdated =! a.CustomerUpdated;
		
		
	};
	a.CustomerUpdated =false;
	a.NotUpdated=false;
	a.NotUpdatedfun=function(){
		a.NotUpdated =! a.NotUpdated;
		
		
	};
	
                   
	
	
	
	
	
	
	
	
	
	 a.sortType  = 'CompanyName'; // set the default sort type
 a.sortReverse  = false;  
	a.searchFish   = '';
	
	
	
	// $scope.removeUser = function(index) {
   // $scope.users.splice(index, 1);
 // };
	
	
	
	
	a.NotFound=false;

	a.NotFoundFuc= function() {

		a.NotFound=true;
	}

	a.addCustForm=false;
	a.addCustFormFuc= function() {
		a.AllCust=false;
		a.FindCust=false;
		a.DeleteShow= false;
		a.addCustForm=!a.addCustForm;
		a.Customerdelete=false;
		a.CustRes =false; 
		a.NotDelete=false;
		a.NotAdded=false;							 													
		a.CustomerAdded=false;	
		

	}
	a.CustomerAdded=false;
	a.CustomerAddedFuc= function() {

		a.CustomerAdded=!a.CustomerAdded;
	}



	a.NotAdded=false;
	a.NotAddedFuc= function() {

		a.NotAdded=!a.NotAdded;
	}

	a.DeleteShow= false;
	a.DeleteShowfun = function() {
		a.DeleteShow = !a.DeleteShow;
		a.addCustForm=false;
		a.AllCust=false;
		a.CustRes =false; 											
		a.FindCust=false;
		a.Customerdelete=false;
		a.NotDelete=false;
		a.NotAdded=false;							 													 
		a.CustomerAdded=false;
	}


	a.addCustomer =function(){


		var customer ={
			ContactName:a.ContactName,
PostalCode:a.PostalCode,
				CustomerID:a.CustomerID,
				CustomerName :a.CustomerName,
				CompanyName:a.CompanyName,
				ContactTitle:a.ContactTitle,
				Address:a.Address,
				City :a.City,
				Country:a.Country,
				Phone:a.Phone,

		};

		b({
			url: '/addCustomers', // No need of IP address
			method: 'POST',
			data: customer,
			headers: {'Content-Type': 'application/json'}

		}).success(function(){
			a.CustomerAddedFuc();
			//a.ProductName,
			a.CustomerID="";
			a.CustomerName="";
			a.CompanyName="";
			a.ContactTitle="";
			a.ContactName="";
			a.PostalCode="";
			a.Address="";
			a.City="";
			a.Discontinued="";
			a.Country="";
			a.Phone=0;

		})
		.error(function(){
			a.NotAddedFuc();
		})
	};
	a.Customerdelete=false;						
	a.CustomerdeleteFuc=function(){

		a.Customerdelete=true;
	}

	a.NotDelete=false;
	a.NotDeleteFuc=function(){
		a.NotDelete=!a.NotDelete;
	};

	a.DeleteCustomer =function(){
		b.delete("/deleteCustomers/"+ a.id)
		.success(function(status){
			a.CustomerdeleteFuc();
			console.log(done);
			console.log(status);

		})
		.error(function(data,status){
			console.log(status);
			a.NotDeleteFuc();

		})
	}
	
	
	

	a.FindAllCust =function(){
		b.get("/findCustomers").success(function(result){
			a.bosses =result;
			a.CustRes =false;
			a.FindCust =false;
			a.DeleteShow = a.DeleteShow=false;
			a.addCustForm=false;
			a.Customerdelete=false;
			a.NotDelete=false;a.NotAdded=false;							 													
			a.CustomerAdded=false;
			a.NotFound=false;

		})
		.error(function(data,status){
		})
	}



	a.findCustomer =function(){
		b.get("/findOneCustomer/"+a.data6+"/"+a.option3).success(function(result){
			a.bosses =result;
			a.CustResFun();
			console.log(result);
			a.NotFound=false;
		})
		.error(function(data,status){
			a.NotFound=true;
			a.CustRes =false;
		})
	}

	a.FindCust=false;
	a.findCustFun=function(){
		a.FindCust = !a.FindCust;
		a.AllCust=false; 
		a.DeleteShow = a.DeleteShow=false;
		a.addCustForm=false;
		a.Customerdelete=false;
		a.NotDelete=false;a.NotAdded=false;							 													 a.CustomerAdded=false;

	}
	a.AllCust=false;
	a.AllCustFun= function(){

		a.AllCust = !a.AllCust;
		a.CustomerUpdated =false;
	a.NotUpdated=false;
	}

	a.CustRes =false;
	a.CustResFun=function(){

		a.CustRes =!a.CustRes;
		a.CustomerUpdated =false;
	a.NotUpdated=false;
	}
	a.showhide = function() {
		a.FindCust =false;   
		a.CustRes =false; 
		a.NotFound=false;
		a.CustomerUpdated =false;
	a.NotUpdated=false;

	}

	a.clear=function(){
		a.data6="";a.option3="";
		a.NotFound=false;
		a.CustomerUpdated =false;
	a.NotUpdated=false;

	};


	a.clearCustomerDelete = function() { 
		a.id=""
				a.Customerdelete=false;
		a.NotDelete=false;
	} 
	a.hideCustomerDelete = function() {
		a.DeleteShow= false;
		a.Customerdelete=false;
		a.NotDelete=false;
	} 



}]);

myApp.controller('ProductController',['$scope','$http', function(a,b){


	a.NotAdded=false;
	a.ProductAdded=false;

	a.ProductAddedfuc= function() {

		a.ProductAdded=true;}


	a.NotAdded=false;

	a.NotAddedfuc= function() {

		a.NotAdded=true;}
	a.NotDelete	=false;	
	a.Deleted	=false;
	a.Deletefuc= function() {

		a.Deleted=true;}
	a.NotDelete	=false;	
	a.NotDeletefuc= function() {

		a.NotDelete=true;}


	a.DeleteProducts =function(){



		b.delete("/deleteproducts/"+ a.id).success(function(status){
			console.log("done");
			console.log(status);
			a.Deletefuc();
			a.NotDelete=false;
		})
		.error(function(data,status){
			console.log(status);
			a.NotDeletefuc();
			a.Deleted=false;
		})
	}





	a.addProduct =function(){ 
		var product ={//user input stored in a JSON object
				ProductName:a.ProductName,
				SupplierID:a.SupplierID,
				CategoryID:a.CategoryID,
				QuantityPerUnit:a.QuantityPerUnit,
				UnitPrice:a.UnitPrice,
				UnitsInStock:a.UnitsInStock,
				ReorderLevel:a.ReorderLevel,
				Discontinued:a.Discontinued,
				ProductID:a.ProductID,
				CategoryID:a.CategoryID,
				StockLevel:a.UnitInStock,};

		b({//http post request is invoked
			url: '/NewProducts',//url to be hit 
			method: 'POST',//http method
			data: product,//json object
			headers: {'Content-Type': 'application/json'}//header info

		}).success(function(){//chained method
			a.ProductAddedfuc();//triggers show method
			a.ProductName="";//empties user input
			a.SupplierID="";
			a.CategoryID="";
			a.QuantityPerUnit="";
			a.UnitPrice="";
			a.UnitsInStock="";
			a.ReorderLevel="";
			a.Discontinued="";
			a.ProductID="";
			a.ProductName="";
			a.UnitInStock="";
		})
		.error(function(){//error trigger show method
			a.NotAddedfuc();
		})
	};


a.ClearProduct =function(){
			a.ProductName,
			a.SupplierID="";
			a.CategoryID="";
			a.QuantityPerUnit="";
			a.UnitPrice="";
			a.UnitsInStock="";
			a.ReorderLevel="";
			a.Discontinued="";
			a.ProductID="";
			a.ProductName="";
			a.UnitInStock="";

}

	a.showMeV3 = false;
	a.myFuncV3 = function() {
		a.showMeV3 = !a.showMeV3;
		a.showMe = false;
		a.showMeV2 = false;
		a.showMe4 = false;
		a.NotDelete= false;

		a.Deleted	=false;
	}

	a.showMe4 = false;
	a.myFuncV4 = function() {
		a.showMe4 = !a.showMe4;
		a.showMeV3 = false;
		a.NotAdded=false;
		a.ProductAdded=false;

	}



}]);
myApp.controller('userQueriesController',['$scope','$http',function(a,b){

	a.Notsubmitted=false;

	a.NotsubmittedFuc= function() {

		a.Notsubmitted=true;}
	a.submitted=false;

	a.submittedFuc= function() {

		a.submitted=true;}

	a.viewmyQuieries = function(req){



		b.get("/mytickets").success(function(result){
			showMe2=true; 
			a.rules =result;


		})
		.error(function(data,status){

		})


	};

	a.addQuery =function(){ 

		var subject ={querySubject:a.querySubject,
				queryBody:a.queryBody,
				firstName:a.firstName,
				LastName:a.LastName,
				email:a.email,
				UrgentLevel:a.UrgentLevel,};

		b({
			url: '/userQueries', // No need of IP address
			method: 'POST',
			data: subject,
			headers: {'Content-Type': 'application/json'}




		}).success(function(result){

			a.submittedFuc();



		}).error(function(result){

			a.NotsubmittedFuc();
		})}
	a.show=false;

	a.myFunc=function(){
		a.showMe = !a.showMe;  
		a.showMe2 =false;
		a.submitted=false;
		a.Notsubmitted=false;
	}


	a.showMe2=false;

	a.myFunc2=function(){
		a.showMe2 = !a.showMe2; 
		a.showMe =false;
		a.submitted=false;
		a.Notsubmitted=false;
	}


}])

myApp.controller('URController',['$scope','$http',function(a,b){


	a.FindQueries =function(){ 

		b.get("/GetAllOpenTickets").success(function(result){
			a.rules =result;
			a.show=true;
			console.log(result);
		})
		.error(function(data,status){

		})
	}



	a.show=false;

	a.myFunc=function(){
		a.showMe = !a.showMe; 
		a.showMe2 = false; 
	}


	a.UpdateRequests =function(_id,querySubject,
                                                                                  queryBody,query_date,firstName,lastName,email,UrgentLevel,Status,Notes ){ 


		var update ={_id:_id,
					 Status:Status,
					 Notes:Notes,
					querySubject:querySubject,
                     queryBody:queryBody,
					 query_date:query_date,
					 firstName:firstName,
					 lastName:lastName,
					 email:email,
					 UrgentLevel:UrgentLevel,
					 Status:Status
					};
		console.log(update);

		b({
			url: '/updateRequests', // No need of IP address
			method: 'PUT',
			data: update,
			headers: {'Content-Type': 'application/json'}




		})    

	}

	a.show2=false;

	a.myFunc2=function(){
		a.showMe2 = !a.showMe2;   
		a.showMe = false; 
	}



}])


myApp.controller('OrdersController',['$scope','$http',function(a,b){
	
	
	a.sortType  = 'OrderID'; // set the default sort type
 a.sortReverse  = false;  
	a.searchFish   = '';
	
	a.mySort=function(){
		a.sortReverse = !a.sortReverse;
	}
	

a.clearOrders=function(){
	a.data="";a.option="";
	a.Month=""
	a.OrderDate="";
}
a.clearOrdersdate=function(){
a.OrderDate="";}

a.clearOrdersDetails=function(){
a.data1="";a.option1="";}

	a.FindOrders =function(){ 

		b.get("/findOrdersVia_O_ID/"+a.OrderID).success(function(result){
			a.rules =result;
			a.show=true;
			console.log(result);
		})
		.error(function(data,status){

		})
	}


	a.FindOrders2 =function(){ 

		b.get("/findOrdersVia_Date/"+a.OrderDate+"/"+a.Month).success(function(result){
			a.rules =result;
			a.show=true;
			console.log(result);
		})
		.error(function(data,status){

		})
	}





	a.OrdersID =false;
	a.OrdersIDfun = function(){
		a.OrdersID = !a.OrdersID;
		a.OrdersDate2=false;
		a.OrdersCust =false;
		a.OrdersD =false;
	}


	a.show=false;  


	a.OrdersDate2=false;
	a.OrdersDate2fun = function(){
		a.OrdersDate2 = !a.OrdersDate2;
		a.OrdersID =false;
		a.OrdersCust =false;
		a.OrdersD =false;
	}


a.OrdersDateHide = function(){
	
		a.OrdersDate2 =false;
		a.show =false;
		
	}
a.OrdersHide = function(){
	
		a.OrdersCust =false;
		a.show =false;
		
	}
a.OrdersHideDetails = function(){
	
		a.OrdersD =false;
		a.show2 =false;
		
	}

	a.FindOrdersC =function(){ 

		b.get("/findOrdersVia/"+a.data+"/"+a.option).success(function(result){
			a.rules =result;
			a.show=true;
			console.log(result);

		})
		.error(function(data,status){

		})
	}




	a.OrdersCust =false;

	a.OrdersCustfun =function(){
		a.OrdersCust=!a.OrdersCust;  
		a.OrdersID =false;
		a.OrdersDate2=false;
		a.OrdersD =false;
	}


	a.FindOrdersD =function(){ 

		b.get("/findOrdersDetailsVia_O_ID/"+a.data1+"/"+a.option1).success(function(result){
			a.rules =result;
			a.show2=true;
			console.log(result);
		})
		.error(function(data,status){

		})
	}

	a.show2=false;
	a.OrdersD =false;

	a.OrdersDfun =function(){
		a.OrdersD=!a.OrdersD;
		a.OrdersID =false;
		a.OrdersCust =false;
		a.OrdersDate2=false;
	};
}])




myApp.controller('chartsController',['$scope','$http',function(a,b){


a.my=function(){
	
	
	
}



}])      

myApp.controller('ReportProController',['$scope','$http',function(a,b){
	a.Notadded=false;
	a.NotaddedFuc=function(){
		a.Notadded=!a.Notadded;
	}
	a.added=false;
	a.addedFuc=function(){
		a.added=!a.added;
	}
	a.proReports =function(){

		a.added=false;
		a.Notadded=false;   
		var reports ={

				email:a.email,
				myreports1 :a.myreports1,
				myreports2:a.myreports2,
				myreports3:a.myreports3,
				myreports4:a.myreports4,
				myreports5:a.myreports5,
		};

		b({
			url: '/addReports', // No need of IP address
			method: 'POST',
			data: reports,
			headers: {'Content-Type': 'application/json'}

		}).success(function(){

			a.myreports1="";
			a.myreports2="";
			a.myreports3="";
			a.myreports4="";
			a.myreports5="";
			a.email="";

			a.addedFuc();
		})
		.error(function(){
			a.NotaddedFuc();
		})
	}; 





	a.proReportsadd =function(){

		a.added2=false;
		a.Notadded2=false;   
		var reports2 ={

				email:a.email,
				reportNumber :a.reportNumber,
				reportURL:a.reportURL,

		};

		b({
			url: '/addNewReport', // No need of IP address
			method: 'POST',
			data: reports2,
			headers: {'Content-Type': 'application/json'}

		}).success(function(){

			a.reportNumber="";
			a.reportURL="";
			a.email="";

			a.added2=true;
		})
		.error(function(){
			a.Notadded2=true; 
		})
	}; 







	a.Notadded2=false;
	a.NotaddedFuc2=function(){
		a.Notadded2=!a.Notadded2;
	}
	a.added2=false;
	a.addedFuc2=function(){
		a.added2=!a.added2;
	}	





}])




myApp.controller('regController',['$scope','$http',function(a,b){



	a.NotRegistered=false;
	a.NotRegisteredFuc=function(){
		a.NotRegistered=!a.NotRegistered;
	}



	a.Registered=false;
	a.RegisteredFuc=function(){
		a.Registered=!a.Registered;
	}








	a.reg =function(){

		a.NotRegistered=false;
		a.Registered=false;   
		var user ={

				email:a.email,
				password :a.password,

		};

		b({
			url: '/signup', // No need of IP address
			method: 'POST',
			data: user,
			headers: {'Content-Type': 'application/json'}

		}).success(function(){

			a.password="";

			a.email="";
console.log(status);
			a.Registered=true;
			if(status ==="500"){
			a.NotRegistered=true; }
		})
		.error(function(){
			a.NotRegistered=true; 
			console.log(status);
		})
	}; 




}])


myApp.controller('ManagerStaffContr',['$scope','$http', function(a,b){

	a.removestaff = function(index) {
	index=index	-1;
    a.rules.splice(index, 1);
		a.FindAllStaff();
		//a.showAllStaffFuc();
  };
		a.DeleteStaff2 =function(myid){
		b.delete("/deleteEmployees/"+ myid)
		.success(function(status){a.DeletedStaffFun();
		console.log(done);
		console.log(status);

		})
		.error(function(data,status){
			console.log(status);
			a.StaffNotDeleted();

		})
	}
	
		
		
			
	
	a.UpdateStaff2 =function(_id,PostalCode,City,Title,FirstName,LastName,Region){ 


		var update ={
				_id:_id,
				LastName:LastName,
				FirstName:FirstName,
				City:City,
				Title:Title,
				Region:Region,
				PostalCode:PostalCode,
				
		};


		b({
			url: '/updateStaff', // No need of IP address
			method: 'PUT',
			data: update,
			headers: {'Content-Type': 'application/json'}

		}).success(function(){
			a._id="";
			a.LastName="";
			a.FirstName="";
			a.City="";
			a.Title="";
			a.Address="";
			Region="";
			a.Region="";
			a.PostalCode="";
			a.Country="";
			a.HomePhone="";
			a.ReportsTo="";
			console.log(update);
			a.updateFun();
		}).error(function(){a.NotUpdateFun();})

	}
	
	
	
	
	
	
	
	
	

	a.FindAllStaff =function(){
		b.get("/findemployees").success(function(result){
			a.rules =result;
			console.log(result);
			//a.showAllStaff=true;
			a.showStaff = false;
			a.showStaffSearch = false;
			a.DeleteShow= false;
			a.showRegStaff=false;
			a.showUpdateStaff=false;
			a.NotFound=false;
			a.box="5px 5px grey"
					//add
			a.NotFound=false;

					a.StaffNotDeleted=false;
			a.DeletedStaff=false;
			a.NotUpdate=false;
			a.update=false;


		}).error(function(data,status){
		})
	}

	a.NotFound=false;

	a.NotFoundFuc= function() {

		a.NotFound=true;
	}




	a.showUpdateStaff = !a.showUpdateStaff;


	a.FindOneStaff =function(){
		b.get("/findemployees/"+a.data6+"/"+a.option3).success(function(result){
			console.log(result);
			a.rules =result;
			a.NotFound=false;
			a.name=" ";

			a.showStaff=true;
			a.showAllStaff = false;
			a.DeleteShow= false;
			a.showRegStaff=false;

		})
		.error(function(data,status){
			a.NotFound=true;
			a.showStaff=false;
		})
	};

	a.DeleteStaff =function(){
		b.delete("/deleteEmployees/"+ a.id)
		.success(function(status){a.DeletedStaffFun();
		console.log(done);
		console.log(status);

		})
		.error(function(data,status){
			console.log(status);
			a.StaffNotDeleted();

		})
	}



	a.UpdateStaff =function(){ 


		var update ={
				_id:a._id,
				LastName:a.LastName,
				FirstName:a.FirstName,
				City:a.City,
				Title:a.Title,
				Address:a.Address,
				Region:a.Region,
				PostalCode:a.PostalCode,
				Country:a.Country,
				HomePhone:a.HomePhone,
				ReportsTo:a.ReportsTo
		};


		b({
			url: '/updateStaff', // No need of IP address
			method: 'PUT',
			data: update,
			headers: {'Content-Type': 'application/json'}

		}).success(function(result){
			console.log(result);
			a._id="";
			a.LastName="";
			a.FirstName="";
			a.City="";
			a.Title="";
			a.Address="";
			Region="";
			a.Region="";
			a.PostalCode="";
			a.Country="";
			a.HomePhone="";
			a.ReportsTo="";
			console.log(update);
			a.updateFun();
		}).error(function(){a.NotUpdateFun();})

	}

	a.showRegStaff=false;
	a.showRegStaffFuc= function() {
		a.showRegStaff = !a.showRegStaff;
		a.showUpdateStaff=false;
		a.showAllStaff=false;
		a.DeleteShow= false;
		a.showAllStaff = false;
		a.showStaffSearch = false;
		a.NotFound=false;
	} 

	a.showUpdateStaff=false;
	a.showUpdateStaffFuc= function() {
		a.showUpdateStaff = !a.showUpdateStaff;
		a.showRegStaff= false;
		a.showStaffSearch = false;
		a.showStaff = false;
		a.showAllStaff=false;
		a.NotFound=false;
		a.DeleteShow= false;



		//add

		a.StaffNotDeleted=false;
		a.DeletedStaff=false;
		a.NotUpdate=false;
		a.update=false;


	} 



	a.showAllStaff=false;
	a.showAllStaffFuc= function() {
		a.showAllStaff = !a.showAllStaff;
		a.showRegStaff= false;

	}
	a.DeleteShow= false;
	a.DeleteShowfunc = function() {
		a.DeleteShow = !a.DeleteShow;
		a.showStaffSearch = false;
		a.showAllStaff=false;
		a.showRegStaff= false;
		a.NotFound=false;
		a.showUpdateStaff=false;
		//add
		a.StaffNotDeleted=false;
		a.DeletedStaff=false;
		a.NotUpdate=false;
		a.update=false;



	}
	a.showAllStaff = false;
	a.DeleteShowFunc = function() {
		a.DeleteShow = !a.DeleteShow;
		a.showRegStaff= false;
	}
	a.showStaff = false;
	a.showStaffFunc = function() {
		a.showStaff = !a.showStaff;
		a.showRegStaff= false;

	}
	a.showStaffSearch = false;
	a.showStaffSearchFunc =function() {
		a.showStaffSearch = !a.showStaffSearch;
		a.showAllStaff = false;
									 a.DeleteShow= false;
								     a.showRegStaff= false;
									 a.showUpdateStaff=false;
a.NotFound=false;
		//aded
		a.box="5px 5px grey";
		a.StaffNotDeleted=false;
		a.DeletedStaff=false;
		a.NotUpdate=false;
		a.update=false;

	}
	a.hideStaffSearch = function() {
		a.showStaffSearch = false;
		a.showStaff = false;
a.NotFound= false;
	}
	a.clearStaffSearch = function() {
		a.data6="";a.option3="";
		a.showStaff=false;
		a.NotFound= false;
	} 
	a.clearStaffDelete = function() { 
		a.id=""
		
	} 
	a.hideStaffDelete = function() {
		a.DeleteShow= false;
	} 

	a.update=false;
	a.updateFun=function(){ 
		a.update=!a.update;
	}
	a.NotUpdate=false;
	a.NotUpdateFun	=function(){
		a.NotUpdate=!a.NotUpdate;
	}
	a.DeletedStaff=false;
	a.DeletedStaffFun	=function(){ 
		a.DeletedStaff=!a.DeletedStaff;
	}
	a.StaffNotDeleted=false;
	a.StaffNotDeletedFun	=function(){ 
		a.StaffNotDeleted=!a.StaffNotDeleted;
	}

}]);




myApp.controller('CustomerController2',['$scope','$http', function(a,b){

	
	
	a.sortType  = 'LastName'; // set the default sort type
 a.sortReverse  = false;  
	a.searchFish   = '';
	
	a.mySort=function(){
		a.sortReverse = !a.sortReverse;
	}
	
	
	
	
	a.UpdateCustomer =function(_id,PostalCode,City,ContactTitle,CompanyName,ContactName){ 
//takes in the table row content as input and asign it to json object

		var update ={
				_id:_id,
			PostalCode:PostalCode,
				CompanyName:CompanyName,
				ContactName:ContactName,
				City:City,
				Title:ContactTitle,
				City:City,
				PostalCode:PostalCode,
		};
		b({ //sends http put request
			url: '/updateCustomers', // No need of IP address
			method: 'PUT',
			data: update,
			headers: {'Content-Type': 'application/json'}

		}).success(function(){//chaining the method(if successful)
			console.log(update);//
			a.updateFun();//call ng-show function
		}).error(function(){
			a.NotUpdateFun();//call ng-show function
						   
		})}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//a.sortBy =function(){
	//	a.sortType  = a.option2;
	//}
	
	a.removeUser = function(index) {
	index=index	-1;
    a.bosses.splice(index, 1);
  };
	// a.sortType  = 'CompanyName'; // set the default sort type
 //a.sortReverse  = false;  
	//a.searchFish   = '';
	
	
	
	
	
	
	
	
	a.NotFound=false;

	a.NotFoundFuc= function() {

		a.NotFound=true;
	}

	a.addCustForm=false;
	a.addCustFormFuc= function() {
		a.AllCust=false;
		a.FindCust=false;
		a.DeleteShow= false;
		a.addCustForm=!a.addCustForm;
		a.Customerdelete=false;
		a.CustRes =false; 
		a.NotDelete=false;
		a.NotAdded=false;							 													
		a.CustomerAdded=false;	
		

	}
	a.CustomerAdded=false;
	a.CustomerAddedFuc= function() {

		a.CustomerAdded=!a.CustomerAdded;
	}



	a.NotAdded=false;
	a.NotAddedFuc= function() {

		a.NotAdded=!a.NotAdded;
	}

	a.DeleteShow= false;
	a.DeleteShowfun = function() {
		a.DeleteShow = !a.DeleteShow;
		a.addCustForm=false;
		a.AllCust=false;
		a.CustRes =false; 											
		a.FindCust=false;
		a.Customerdelete=false;
		a.NotDelete=false;
		a.NotAdded=false;							 													 
		a.CustomerAdded=false;
	}


	a.addCustomer =function(){


		var customer ={

				CustomerID:a.CustomerID,
				CustomerName :a.CustomerName,
				CompanyName:a.CompanyName,
				ContactTitle:a.ContactTitle,
				Address:a.Address,
				City :a.City,
				Country:a.Country,
				Phone:a.Phone,

		};

		b({
			url: '/addCustomers', // No need of IP address
			method: 'POST',
			data: customer,
			headers: {'Content-Type': 'application/json'}

		}).success(function(){
			a.CustomerAddedFuc();
			//a.ProductName,
			a.CustomerID="";
			a.CustomerName="";
			a.CompanyName="";
			a.ContactTitle="";
			a.Address="";
			a.City="";
			a.Discontinued="";
			a.Country="";
			a.Phone="";

		})
		.error(function(){
			a.NotAddedFuc();
		})
	};
	a.Customerdelete=false;						
	a.CustomerdeleteFuc=function(){

		a.Customerdelete=true;
	}

	a.NotDelete=false;
	a.NotDeleteFuc=function(){
		a.NotDelete=!a.NotDelete;
	};

	a.DeleteCustomer =function(){
		b.delete("/deleteCustomers/"+ a.id)
		.success(function(status){
			a.CustomerdeleteFuc();
			console.log(done);
			console.log(status);

		})
		.error(function(data,status){
			console.log(status);
			a.NotDeleteFuc();

		})
	}
	
	
	a.DeleteCustomer2 =function(myid){//takes in document ID
		b.delete("/deleteCustomers/"+ myid)//delete http request to  url + id
		.success(function(status){//chained method
			a.CustomerdeleteFuc();//method called
			console.log(done);
			console.log(status);
		})//chained method
		.error(function(data,status){
			console.log(status);
			a.NotDeleteFuc();

		})
	}

	a.FindAllCust =function(){
		b.get("/findCustomers").success(function(result){
			a.bosses =result;
			a.CustRes =false;
			a.FindCust =false;
			a.DeleteShow = a.DeleteShow=false;
			a.addCustForm=false;
			a.Customerdelete=false;
			a.NotDelete=false;a.NotAdded=false;							 													
			a.CustomerAdded=false;
			a.NotFound=false;

		})
		.error(function(data,status){
		})
	}



	a.findCustomer =function(){
		b.get("/findOneCustomer/"+a.data6+"/"+a.option3).success(function(result){
			a.bosses =result;
			a.CustResFun();
			console.log(result);
			a.NotFound=false;
		})
		.error(function(data,status){
			a.NotFound=true;
			a.CustRes =false;
		})
	}

	a.FindCust=false;
	a.findCustFun=function(){
		a.FindCust = !a.FindCust;
		a.AllCust=false; 
		a.DeleteShow = a.DeleteShow=false;
		a.addCustForm=false;
		a.Customerdelete=false;
		a.NotDelete=false;a.NotAdded=false;							 													 a.CustomerAdded=false;

	}
	a.AllCust=false;
	a.AllCustFun= function(){

		a.AllCust = !a.AllCust;
	}

	a.CustRes =false;
	a.CustResFun=function(){

		a.CustRes =!a.CustRes;
	}
	a.showhide = function() {
		a.FindCust =false;   
		a.CustRes =false; 
		a.NotFound=false;

	}

	a.clear=function(){
		a.data6="";a.option3="";
		a.NotFound=false;

	};


	a.clearCustomerDelete = function() { 
		a.id=""
				a.Customerdelete=false;
		a.NotDelete=false;
	} 
	a.hideCustomerDelete = function() {
		a.DeleteShow= false;
		a.Customerdelete=false;
		a.NotDelete=false;
	} 



}]);





