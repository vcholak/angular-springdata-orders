(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('OrderController', OrderController);

    OrderController.$inject = ['OrderService', 'SpringDataRestAdapter'];

    /* @ngInject */
    function OrderController(OrderService, SpringDataRestAdapter) {
        var vm = this,
            resource = OrderService.query();
                       
        SpringDataRestAdapter.process(resource.$promise, ['customer', 'salesRep', 'itemsCount'], true).then(function (processedResponse) {
            vm.orders = processedResponse._embeddedItems;
        });
    }
}());