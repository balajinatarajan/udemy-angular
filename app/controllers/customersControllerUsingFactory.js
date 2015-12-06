(function(){
    var SimpleController = function ($scope, $log, customersFactory, appSettings){
    // using service instead of factory
    //var SimpleController = function ($scope, customersService){
        //init
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;
        
        function init() {
            customersFactory.getCustomers()
                .success(function(customers) {
                    $scope.customers = customers;
                })
                .error(function(data, status, headers, config) {
                    //handle error
                    $log.log(data.error + ' ' + status);
                });
        
            //$scope.customers = customersService.getCustomers();
        }

        init();
        
        $scope.doSort = function(propName){
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse; 
        }
        
        $scope.deleteCustomer = function(customerId) {
            customersFactory.deleteCustomer(customerId)
                .success(function(status) {
                    if (status) {
                        for (var i=0,len=$scope.customers.length;i<len;i++) {
                            if ($scope.customers[i].id === customerId) {
                               $scope.customers.splice(i,1);
                               break;
                            }
                        }  
                    }
                    else {
                        $window.alert('Unable to delete customer');   
                    }
                    
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        };
    };
    
    // to handle minifying frameworks replacing $scope with a letter ($scope to $s)
    SimpleController.$inject = ['$scope', '$log', 'customersFactory', 'appSettings'];
    //SimpleController.$inject = ['$scope', 'customersService'];
    
    angular.module('demoApp').controller('CustomersController',SimpleController);
}());