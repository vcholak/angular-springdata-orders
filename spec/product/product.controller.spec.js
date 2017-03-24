describe('ProductController', function () {
    'use strict';
    
    var rootScope,
        scope,
        ctrl;
        
    beforeEach(function () {
        module('app.product');
            
        inject(function ($injector) {
            rootScope = $injector.get('$rootScope');
            scope = rootScope.$new();
            ctrl = $injector.get('$controller')('ProductController', {$scope: scope});
        });
    });
    
    it('should have ProductController to be defined', function () {
        expect(ctrl).toBeDefined();
    });

});