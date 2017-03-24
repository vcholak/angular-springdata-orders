(function () {
    'use strict';
    angular
        .module('app.customer')
        .factory('CustomerService', factory);

    factory.$inject = ['$resource'];

    /* @ngInject */
    function factory($resource) {

        return $resource('/api/customers/:customerId', {customerId: '@id'}, {
            query: {
                isArray: false
            }
        });
    }
}());