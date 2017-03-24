(function () {
    'use strict';
    
    angular
        .module('app.product')
        .config(configuration);

    configuration.$inject = ['$routeProvider'];


    /* @ngInject */
    function configuration($routeProvider) {
        $routeProvider
            .when('/products', {
                templateUrl: 'app/product/products.html',
                controller: 'ProductController',
                controllerAs: 'vm'
            })
            .when('/products/:productId', {
                templateUrl: 'app/product/product-details.html',
                controller: 'ProductDetailsController',
                controllerAs: 'vm'
            });
    }
}());