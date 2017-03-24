(function () {
    'use strict';
    angular
        .module('app.order')
        .factory('OrderItemService', OrderItemService);

    OrderItemService.$inject = ['$resource'];

    /* @ngInject */
    function OrderItemService($resource) {
        
        return $resource('/api/orderItems/:orderItemId', {orderItemId: '@id'}, {
            query: {
                isArray: false
            }
        });
    }
}());