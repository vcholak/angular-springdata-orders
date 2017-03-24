(function () {
    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'app.version',
            'app.filter',
            'app.cart',
            'app.home',
            'app.customer',
            'app.product',
            'app.state',
            'app.order'
        ]);
}());