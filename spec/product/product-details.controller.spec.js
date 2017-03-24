describe('ProductDetailsController', function () {
    'use strict';
    
    var rootScope,
        scope,
        ctrl;
        
    beforeEach(function () {
        module('app.product');
            
        inject(function ($injector) {
            rootScope = $injector.get('$rootScope');
            scope = rootScope.$new();
            ctrl = $injector.get('$controller')('ProductDetailsController', {$scope: scope});
        });
    });
    
    it('should have ProductDetailsController to be defined', function () {
        expect(ctrl).toBeDefined();
    });

});