(function(){
    var app = angular.module('demoApp',['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider){
       $routeProvider
           .when('/', {
                controller: 'CustomersController',
                templateUrl: 'app/views/customers2.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'app/views/ordersUsingFactory.html'
            })
            .when('/orders', {
                controller: 'AllOrdersController',
                templateUrl: 'app/views/allorders.html'
            })
            .otherwise({ redirectTo: '/'});
    });
}());