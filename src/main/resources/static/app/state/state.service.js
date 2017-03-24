(function () {
    'use strict';

    angular
        .module('app.state')
        .service('StateService', StateService);

    StateService.$inject = ['$resource'];

    /* @ngInject */
    function StateService($resource) {
                
        return $resource('/api/states/:stateId', {stateId: '@id'}, {
            query: {
                isArray: false
            }
        });
    }
}());