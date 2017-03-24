describe('EnterOrderController', function () {
    'use strict';
    
    var rootScope,
        scope,
        ctrl;
        
    beforeEach(function () {
        module('app.customer');
        module('app.product');
        module('app.order');
            
        inject(function ($injector) {
            rootScope = $injector.get('$rootScope');
            scope = rootScope.$new();
            ctrl = $injector.get('$controller')('EnterOrderController', {$scope: scope});
        });
    });
    
    it('should have EnterOrderController to be defined', function () {
        expect(ctrl).toBeDefined();
    });

});