(function () {
    'use strict';
    angular
        .module('app.order')
        .factory('OrderService', OrderService);

    OrderService.$inject = ['$resource'];

    /* @ngInject */
    function OrderService($resource) {
        
        return $resource('/api/orders/:orderId', {orderId: '@id'}, {
            query: {
                isArray: false
            }
        });
    }
}());