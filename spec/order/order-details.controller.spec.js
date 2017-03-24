describe('OrderDetailsController', function () {
    'use strict';
    
    var rootScope,
        scope,
        ctrl;
        
    beforeEach(function () {
        module('app.order');
            
        inject(function ($injector) {
            rootScope = $injector.get('$rootScope');
            scope = rootScope.$new();
            ctrl = $injector.get('$controller')('OrderDetailsController', {$scope: scope});
        });
    });
    
    it('should have OrderDetailsController to be defined', function () {
        expect(ctrl).toBeDefined();
    });

});