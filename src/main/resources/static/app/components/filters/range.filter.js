(function () {
    'use strict';
    
    angular
        .module("app.filter")
        .filter("range", rangeFilter);
    
    rangeFilter.$inject = ['$filter'];
            
    function rangeFilter($filter) {
        return function (arr, page, pageSize) {
            if (angular.isArray(arr) && angular.isNumber(page) && angular.isNumber(pageSize)) {
                var start_index = (page - 1) * pageSize;
                if (arr.length < start_index) {
                    return [];
                } else {
                    return $filter("limitTo")(arr.splice(start_index), pageSize);
                }
            } else {
                return arr;
            }
        };
    }
}());