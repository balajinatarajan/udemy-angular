(function(){
    var SimpleController = function ($scope, customersFactory){
        //init
        $scope.orders = null;
        $scope.ordersTotal = 0.0;
        $scope.totalType;
        
        function init() {
            customersFactory.getOrders()
                .success(function(orders) {
                    $scope.orders = orders;
                    getOrdersTotal();
                })
                .error(function(data, status, headers, config) {
                    //handle error
                    $log.log(data.error + ' ' + status);
                });
        }

        function getOrdersTotal() {
            var total = 0;
            for(var i=0; i < $scope.orders.length; i++) {
                total += $scope.orders[i].total;
            }
            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
        }
        init();
    };
    
    // to handle minifying frameworks replacing $scope with a letter ($scope to $s)
    SimpleController.$inject = ['$scope', 'customersFactory'];
    
    angular.module('demoApp').controller('AllOrdersController',SimpleController);
}());