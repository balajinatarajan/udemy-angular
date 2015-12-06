(function(){
    var SimpleController = function ($scope){
        //init
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [
            {
                id: 1,
                joined: '2015-11-03', 
                name: 'Bala', 
                city: 'Fairfax', 
                orderTotal: 9.9567,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.9567
                    }
                ]
            },
            {
                id: 2,
                joined: '2014-12-23', 
                name: 'Amal', 
                city: 'McLean', 
                orderTotal: 19.4067,
                orders: [
                    {
                        id: 1,
                        product: 'Shirts',
                        total: 19.4067
                    }
                ]
            },
            {
                id: 3,
                joined: '2011-01-17', 
                name: 'Manu', 
                city: 'Gaithersburg', 
                orderTotal: 69.67,
                orders: [
                    {
                        id: 1,
                        product: 'Watches',
                        total: 69.67
                    }
                ]
            },
            {
                id: 4,
                joined: '2013-08-25', 
                name: 'Alex', 
                city: 'Washington', 
                orderTotal: 23.153,
                orders: [
                    {
                        id: 1,
                        product: 'Accessories',
                        total: 23.153
                    }
                ]
            }
        ];

        $scope.doSort = function(propName){
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse; 
        }
    };
    
    // to handle minifying frameworks replacing $scope with a letter ($scope to $s)
    SimpleController.$inject = ['$scope'];
    
    angular.module('demoApp').controller('CustomersController',SimpleController);
}());