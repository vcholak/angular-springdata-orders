(function () {
    'use strict';
    
    angular
        .module('app')
        .config(configuration);
        
    configuration.$inject = ['$locationProvider'];
        
    /* @ngInject */
    function configuration($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
})();