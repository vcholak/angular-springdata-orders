(function () {
    'use strict';
            
    describe('app.customer module', function () {
        
        var rootScope,
            scope,
            ctrl;
        
        beforeEach(
            module('app.customer')
            
            //inject(function($injector) {
            //    rootScope = $injector.get('$rootScope');
            //    scope = rootScope.$new();
            //    ctrl = $injector.get('$controller')('CustomerController', {$scope: scope});
            //});
        );        

        describe('CustomerController', function () {
        
            it('should have CustomerController to be defined', inject(function ($controller) {
                var scope = {};
                var ctrl = $controller('CustomerController', {$scope: scope});
                
                expect(ctrl).toBeDefined();
            }));

            it('should find 1 Avenger when filtered by name', function () {
                // TODO
            });

            it('should have 10 Avengers', function () {
                // TODO (mock data?)
            });

            it('should return Avengers via XHR', function () {
                // TODO ($httpBackend?)
            });

        });
    });
}());