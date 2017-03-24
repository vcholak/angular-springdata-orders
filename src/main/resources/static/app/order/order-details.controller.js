(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('OrderDetailsController', OrderDetailsController);

    OrderDetailsController.$inject = ['$routeParams', 'OrderService'];

    /* @ngInject */
    function OrderDetailsController($routeParams, OrderService) {
        var vm = this;
        
        vm.order = OrderService.get({orderId: $routeParams.orderId});
    }
}());