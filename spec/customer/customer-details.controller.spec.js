describe('CustomerDetailsController', function () {
    'use strict';
    
    var rootScope,
        scope,
        ctrl;
        
    beforeEach(function () {
        module('app.customer');
            
        inject(function ($injector) {
            rootScope = $injector.get('$rootScope');
            scope = rootScope.$new();
            ctrl = $injector.get('$controller')('CustomerDetailsController', {$scope: scope});
        });
    });
    
    it('should have CustomerDetailsController to be defined', function () {
        expect(ctrl).toBeDefined();
    });

});