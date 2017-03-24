(function () {
    'use strict';
    
    angular
        .module('app.order')
        .config(configuration);
        
    configuration.$inject = ['$routeProvider'];
        
    /* @ngInject */
    function configuration($routeProvider) {
        $routeProvider
            .when('/orders', {
                templateUrl: 'app/order/orders.html',
                controller: 'OrderController',
                controllerAs: 'vm'
            })
            .when('/orders/enter', {
                templateUrl: 'app/order/enter-order.html',
                controller: 'EnterOrderController',
                controllerAs: 'vm'
            })
            .when('/orders/:orderId', {
                templateUrl: 'app/order/order-details.html',
                controller: 'OrderDetailsController',
                controllerAs: 'vm'
            });
    }
}());