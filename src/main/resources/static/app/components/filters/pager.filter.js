(function () {
    'use strict';

    angular
        .module("app.filter")
        .filter("pager", function () {
            return function (data, size) {
                var i, result;
                if (angular.isArray(data)) {
                    result = [];
                    for (i = 0; i < Math.ceil(data.length / size); i += 1) {
                        result.push(i);
                    }
                    return result;
                } else {
                    return data;
                }
            };
        });
}());