            var myApp = angular.module('myApp', ['ngRoute']);


            myApp.config(function($routeProvider){

                $routeProvider

                    .when('/ProductView',{
                        templateUrl:'/ProductView',
                        controller:'ProductController'

                    })

 .when('/charts',{
                        templateUrl:'/chart',
                       // controller:'chartsController'

                    })

 .when('/StaffView2',{
                        templateUrl:'/StaffView2',
                        controller:'StaffController'

                    })

                .when('/getCustomers',{
                        templateUrl:'/Customers',
                        controller:'CustomerController'

                    })
.when('/getCustomers2',{
                        templateUrl:'/Customers2',
                        controller:'CustomerController'

                    })
                    .when('/StaffView',{
                        templateUrl:'/StaffView',
                        controller:'StaffController'

                    })
                  .when('/makeRequests',{
                        templateUrl:'/makeRequests',
                        controller:'userQueriesController'

                    })
                .when('/getRequests',{
                        templateUrl:'/adminRequests',
                        controller:'URController'

                    })
                  .when('/getRequests',{
                        templateUrl:'/updateRequests',
                        controller:'URController'

                    })
                 .when('/reg',{
                        templateUrl:'/register',
                        controller:'URController'

                    })

                    .when('/OrdersView',{
                        templateUrl:'/OrdersView',
                        controller:'OrdersController'

                    })


            "#/Requests"
            });


            myApp.controller('StaffController',['$scope','$http', function(a,b){

                a.FindAllStaff =function(){
                    b.get("/findemployees").success(function(result){
                            a.rules =result;
                          
                     a.showAllStaffFuc();
                          a.showStaff = false;
                         a.showStaffSearch = false;
                          a.DeleteShow= false;
                         a.showRegStaff=false;
                         a.showUpdateStaff=false;
                        })
                        .error(function(data,status){
                        })
                }
               

                a.FindOneStaff =function(){
                    b.get("/findOneEmployees/"+ a.name).success(function(result){
                            
						
						
						
						a.empes =result;
                        a.showStaff=true;
                        a.showAllStaff = false;
                        a.DeleteShow= false;
                         a.showRegStaff=false;
                        })
                        .error(function(data,status){


                        })
                }

                 a.DeleteStaff =function(){
                    b.delete("/deleteEmployees/"+ a.id).success(function(status){
                          console.log(done);
                        console.log(status);
                        
                        })
                        .error(function(data,status){
                            console.log(status);

                        })
                }
                 
                 
                 
                  a.UpdateStaff =function(){ 
                       

                            var update ={_id:a._id,LastName:a.LastName,FirstName:a.FirstName,City:a.City,Title:a.Title,Address:a.Address,Region:a.Region,PostalCode:a.PostalCode,Country:a.Country,HomePhone:a.HomePhone,ReportsTo:a.ReportsTo};
                      console.log(update);
                      
              
                      

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
                      

                        })
                 
                 
                    

                  }
                 
                  
                 
                 
                        a.showRegStaff=false;
                a.showRegStaffFuc= function() {
                    a.showRegStaff = !a.showRegStaff;
                    a.showUpdateStaff=false;
                    a.showAllStaff=false;
                     a.DeleteShow= false;
                     a.showAllStaff = false;
                    a.showStaffSearch = false;
                } 
                 
                  
                  
                  
                 
                   a.showUpdateStaff=false;
                a.showUpdateStaffFuc= function() {
                    a.showUpdateStaff = !a.showUpdateStaff;
                     a.showRegStaff= false;
                     a.showStaffSearch = false;
                    a.showStaff = false;
                    a.showAllStaff=false;
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
                  
                }
                a.hideStaffSearch = function() {
                    a.showStaffSearch = false;
                    a.showStaff = false;
                   
                }
                a.clearStaffSearch = function() {
                   
                    a.name=""
                } 
                a.clearStaffDelete = function() {
                   
                    a.id=""
                } 
                a.hideStaffDelete = function() {
                   
                    a.DeleteShow= false;
                } 
                 
                

            }]);

            myApp.controller('CustomerController',['$scope','$http', function(a,b){

            a.click =function(){
                    b.get("/findCustomers").success(function(result){
                            a.bosses =result;
                        a.CustRes =false;
                        a.FindCust =false; 
                        })
                        .error(function(data,status){
                        })
                }


              
               a.findCustomer =function(){
                    b.get("/findOneCustomer/"+ a.id).success(function(result){
                            a.bosses =result;
                      
                        console.log(result);
                        })
                        .error(function(data,status){
                        })
                }
                
                a.FindCust=false;
                a.findCustFun=function(){
                    a.FindCust = !a.FindCust;
                      a.AllCust=false; 
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
                     
                     
                 }
                 
                a.clear=function(){
                    a.id="";
                    
                };
            
                 

               
                

            }]);

            myApp.controller('ProductController',['$scope','$http', function(a,b){

                
                
              
         

                a.DeleteProducts =function(){
                    b.delete("/deleteproducts/"+ a.id).success(function(status){
                          console.log("done");
                        console.log(status);
                        
                        })
                        .error(function(data,status){
                            console.log(status);

                        })
                }
                 
                
                
                
                
                 a.addProduct =function(){ 

                     var product ={ProductName:a.ProductName,
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

                      b({
                  url: '/NewProducts', // No need of IP address
                  method: 'POST',
                  data: product,
                  headers: {'Content-Type': 'application/json'}




                  }).success(function(){
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

                        })
                        .error(function(){
console.log("did not work");
                        })
                  };
                
                
                
                
                

                a.showMeV3 = false;
                a.myFuncV3 = function() {
                    a.showMeV3 = !a.showMeV3;
                    a.showMe = false;
                    a.showMeV2 = false;
                }
                
                 a.showMe4 = false;
                a.myFuncV4 = function() {
                    a.showMe4 = !a.showMe4;
                   
                }
                
                

            }]);
            myApp.controller('userQueriesController',['$scope','$http',function(a,b){



                a.viewmyQuieries = function(req){



                      b.get("/myRequests").success(function(result){
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




                  })
                  };
                a.show=false;

                a.myFunc=function(){
                   a.showMe = !a.showMe;  
                    a.showMe2 =false;
                }


                 a.showMe2=false;

                a.myFunc2=function(){
                   a.showMe2 = !a.showMe2; 
                    a.showMe =false;
                }


                }])

            myApp.controller('URController',['$scope','$http',function(a,b){


                  a.FindQueries =function(){ 

                      b.get("/getRequest").success(function(result){
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


                 a.UpdateRequests =function(){ 


                            var update ={_id:a._id,Status:a.Status,Notes:a.Notes};
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

                      b.get("/findOrdersVia_Date/"+a.OrderDate).success(function(result){
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
                
                
                
                
              
                
                a.FindOrdersC =function(){ 

                      b.get("/findOrdersVia_C_ID/"+a.CustomerID).success(function(result){
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

                      b.get("/findOrdersDetailsVia_O_ID/"+a.OrderID).success(function(result){
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


                



               }])      
            
            