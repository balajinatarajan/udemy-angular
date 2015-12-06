var demoApp = angular.module('demoApp',[]);

demoApp.controller('CustomersController', function (){
    //init
    this.sortBy = 'name';
    this.reverse = false;

    this.customers = [{joined: '2015-11-03', name: 'Bala', city: 'Fairfax', orderTotal: 9.9567},{joined: '2014-12-23', name: 'Amal', city: 'McLean', orderTotal: 19.4067},{joined: '2011-01-17', name: 'Manu', city: 'Gaithersburg', orderTotal: 69.67},{joined: '2013-08-25', name: 'Alex', city: 'Washington', orderTotal: 23.153}];

    this.doSort = function(propName){
        this.sortBy = propName;
        this.reverse = !this.reverse; 
    }
});