(function () {
    'use strict';

    angular
        .module('app.version')
        .filter('interpolate', filter);
    
    filter.$inject = ['version'];

    function filter(version) {
        
        function filterFilter(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
        
        return filterFilter;
    }
}());