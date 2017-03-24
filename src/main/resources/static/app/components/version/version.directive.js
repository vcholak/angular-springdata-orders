(function () {
    'use strict';

    angular
        .module('app.version')
        .directive('appVersion', Factory);

    Factory.$inject = ['version'];

    /* @ngInject */
    function Factory(version) {
                        
        var instance = {
            //bindToController: true,
            //controller: Controller,
            //controllerAs: 'vm',
            link: function (scope, element, attrs, controller) {
                element.text(version);
            }
            //restrict: 'A',
            //scope: {}
        };
        return instance;
    }
}());