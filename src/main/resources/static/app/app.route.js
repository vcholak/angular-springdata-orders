(function () {
    'use strict';
    
    angular
        .module('app')
        .config(configuration);
        
    configuration.$inject = ['$routeProvider'];
        
    /* @ngInject */
    function configuration($routeProvider) {
        $routeProvider
            .otherwise({redirectTo: '/home'});
    }
}());