var myApp = angular.module('myApp', []);

myApp.controller('mainController',['$scope','$timeout','$filter','$http', function(a,b,c,d){
    b(function(){ 
        a.name = 'Paddy';
        a.age = 20;
        },3000);
    a.handle='';
    a.name = 'Eanna'
    a.age = 13;
    console.log(a);
 a.lowercasehandle = function(){
    return c('lowercase')(a.handle);
     };
a.number = 5;
    a.click =function(){
        d.get("/findRegUsers").success(function(result){
                a.rules =result;
            })
            .error(function(data,status){


            })


    }



    //  a.rules=[{ruleName: "no crying"},
       //      {ruleName: "no fighting"},
             //{ruleName:"no shoutiing"}];

    a.showMe = false;
    a.myFunc = function() {
        a.showMe = !a.showMe;
    }
}]);

myApp.controller('mainController2',['$scope','$timeout','$filter','$http', function(a,b,c,d){
    b(function(){
        a.name = 'Paddy';
        a.age = 20;
    },3000);
    a.handle='';
    a.name = 'Eanna'
    a.age = 13;
    console.log(a);
    a.lowercasehandle = function(){
        return c('lowercase')(a.handle);
    };
    a.number = 5;
    a.click =function(){
        d.get("/findRegUsers").success(function(result){
                a.rules =result;
            })
            .error(function(data,status){


            })


    }



    //  a.rules=[{ruleName: "no crying"},
    //      {ruleName: "no fighting"},
    //{ruleName:"no shoutiing"}];

    a.showMe = false;
    a.myFunc = function() {
        a.showMe = !a.showMe;
    }
}]);