(function () {
    'use strict';
    
    angular
        .module('app.customer')
        .config(configuration);
        
    configuration.$inject = ['$routeProvider'];
        
    /* @ngInject */
    function configuration($routeProvider) {
        $routeProvider
            .when('/customers', {
                templateUrl: 'app/customer/customers.html',
                controller: 'CustomerController',
                controllerAs: 'vm'
            })
            .when('/customers/:customerId', {
                templateUrl: 'app/customer/customer-details.html',
                controller: 'CustomerDetailsController',
                controllerAs: 'vm'
            });
    }
})();