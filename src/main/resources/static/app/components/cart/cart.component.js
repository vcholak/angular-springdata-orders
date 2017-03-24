(function () {
    'use strict';
            
    var options = {
        templateUrl: "app/components/cart/cart-summary.html",
        controller: 'EnterOrderController'
    };

    angular
        .module('app.cart')
        .component("cartSummary", options);
}());