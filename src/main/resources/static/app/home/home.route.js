(function () {
    'use strict';
    
    angular
        .module('app.home')
        .config(configuration);
        
    configuration.$inject = ['$routeProvider'];
        
    /* @ngInject */
    function configuration($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }
})();