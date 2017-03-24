(function () {
    'use strict';

    angular
        .module('app.product')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['ProductService', 'SpringDataRestAdapter'];

    /* @ngInject */
    function ProductController(ProductService, SpringDataRestAdapter) {
        var vm = this,
            resource = ProductService.query();
        
        SpringDataRestAdapter.process(resource.$promise, 'category', true).then(function (processedResponse) {
            vm.products = processedResponse._embeddedItems;
        });
    }
}());