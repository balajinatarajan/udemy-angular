(function(){
    var OrdersController = function ($scope, $routeParams, customersFactory){

        var customerId = $routeParams.customerId;
        $scope.customer = null;
        
        function init() {
            // search customers by customer id... this is just a init function. invoke this after 'customer' object is loaded
            customersFactory.getCustomer(customerId)
                .success(function(customer) {
                    $scope.customer = customer;
                })
                .error(function(data, status, headers, config) {
                    //handle error
                });
             
        }
        
        init();
    };
    
    // to handle minifying frameworks replacing $scope with a letter ($scope to $s)
    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];
    
    angular.module('demoApp').controller('OrdersController',OrdersController);
}());