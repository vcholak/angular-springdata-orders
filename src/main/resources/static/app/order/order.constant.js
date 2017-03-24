(function () {
    'use strict';
    
    angular
        .module('app.order')
        .constant('pageSize', 5)
        .constant("activeProductClass", "btn-primary")
        .constant('defaultSalesRep', "http://localhost:8080/api/users/1");
}());