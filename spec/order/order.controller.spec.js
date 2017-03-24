describe('OrderController', function () {
    'use strict';
    
    var rootScope,
        scope,
        ctrl;
        
    beforeEach(function () {
        module('app.order');
            
        inject(function ($injector) {
            rootScope = $injector.get('$rootScope');
            scope = rootScope.$new();
            ctrl = $injector.get('$controller')('OrderController', {$scope: scope});
        });
    });
    
    it('should have OrderController to be defined', function () {
        expect(ctrl).toBeDefined();
    });

});