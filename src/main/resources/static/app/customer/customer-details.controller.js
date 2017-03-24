(function () {
    'use strict';

    angular
        .module('app.customer')
        .controller('CustomerDetailsController', CustomerDetailsController);

    CustomerDetailsController.$inject = ['$routeParams', 'CustomerService', 'SpringDataRestAdapter'];

    /* @ngInject */
    function CustomerDetailsController($routeParams, CustomerService, SpringDataRestAdapter) {
        var vm = this,
            resource = CustomerService.get({customerId: $routeParams.customerId});
        
        SpringDataRestAdapter.process(resource.$promise, 'state', true).then(function (processedResponse) {
            vm.customer = processedResponse;
        });
    }
}());