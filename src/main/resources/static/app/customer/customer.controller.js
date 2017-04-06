(function () {
    'use strict';

    angular
        .module('app.customer')
        .controller('CustomerController', CustomerController);

    CustomerController.$inject = ['CustomerService', 'SpringDataRestAdapter'];

    /* @ngInject */
    function CustomerController(CustomerService, SpringDataRestAdapter) {
        var vm = this,
            resource = CustomerService.query();
       
        SpringDataRestAdapter.process(resource.$promise, 'state', true).then(function (processedResponse) {
            vm.customers = processedResponse._embeddedItems;
        });
    }
}());
