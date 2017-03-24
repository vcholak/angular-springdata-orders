(function () {
    'use strict';

    angular
        .module('app.product')
        .controller('ProductDetailsController', ProductDetailsController);

    ProductDetailsController.$inject = ['$routeParams', 'ProductService', 'SpringDataRestAdapter'];

    /* @ngInject */
    function ProductDetailsController($routeParams, ProductService, SpringDataRestAdapter) {
        var vm = this,
            resource = ProductService.get({productId: $routeParams.productId});
        
        SpringDataRestAdapter.process(resource.$promise, 'category', true).then(function (processedResponse) {
            vm.product = processedResponse;
        });
    }
}());