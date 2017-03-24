(function () {
    'use strict';

    angular
        .module('app.customer')
        .controller('CustomerController', CustomerController);

    CustomerController.$inject = ['CustomerService', 'SpringDataRestAdapter'];

    /* @ngInject */
    function CustomerController(CustomerService, SpringDataRestAdapter) {
        var vm = this;
        vm.property = 'Controller';
        
        var resource = CustomerService.query();
       
        SpringDataRestAdapter.process(resource.$promise, 'state', true).then(function (processedResponse) {
            vm.customers = processedResponse._embeddedItems;
        });
    }
}());
