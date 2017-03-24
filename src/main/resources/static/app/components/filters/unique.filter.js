(function () {
    'use strict';
    
    angular
        .module("app.filter")
        .filter("unique", function () {
            return function (data, propertyName) {
                if (angular.isArray(data) && angular.isString(propertyName)) {
                    var results = [], keys = {}, i, val;
                    for (i = 0; i < data.length; i += 1) {
                        val = data[i][propertyName].name; //TODO don't use hard-coded property 'name'
                        if (angular.isUndefined(keys[val])) {
                            keys[val] = true;
                            results.push(val);
                        }
                    }
                    return results;
                } else {
                    return data;
                }
            };
        });
}());