describe('ProductService', function () {
    'use strict';
    
    var $httpBackend,
        ProductService;
    
    beforeEach(function () {
    
        // load the modules
        module('ngResource');
        module('app.product');
        
        jasmine.addCustomEqualityTester(angular.equals);
    
        // inject your service for testing.
        // The _underscores_ are a convenience thing so you can have your variable name be the same as your injected service.
        inject(function (_ProductService_, _$httpBackend_) {
            ProductService = _ProductService_;
            $httpBackend = _$httpBackend_;
        });
    });
    
    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
     
    it('should retrieve response object containing products.', function () {
        // set up some data for the http call to return and test later.
        var returnedData = {d: [
                {
                    name: 'Soccer Ball',
                    price: 35.00
                },
                {
                    name: 'Kayak',
                    abbreviation: 135.99
                }
            ]};
            
        // expectGET to make sure this is called once.
        $httpBackend.expectGET('/api/products').respond(returnedData);
                    
        // make the call.
        var products = ProductService.query();
        
        expect(products).toEqual({});
            
        // flush the backend to "execute" the request to do the expectedGET assertion.
        $httpBackend.flush();
        
        expect(products).toEqual(returnedData);
    });
});