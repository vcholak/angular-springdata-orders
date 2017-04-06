(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);
    
    HomeController.$inject = ['$http'];
    
    /* @ngInject */
    function HomeController($http) {
        
        var vm = this;
        
        $http.get('/api').then(function(response) {
            vm.api = response;
        });        
    }
}());