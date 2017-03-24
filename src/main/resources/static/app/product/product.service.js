(function () {
    'use strict';
    angular
        .module('app.product')
        .factory('ProductService', factory);

    factory.$inject = ['$resource'];

    /* @ngInject */
    function factory($resource) {
        
        return $resource('/api/products/:productId', {productId: '@id'}, {
            query: {                
                isArray: false
            }
        });

        ////////////////

        function func() {
        }
    }
})();