describe('OrderService', function () {
    'use strict';
    
    var $httpBackend,
        OrderService;
    
    beforeEach(function () {
    
        // load the modules
        module('ngResource');
        module('app.order');
        
        jasmine.addCustomEqualityTester(angular.equals);
    
        // inject your service for testing.
        // The _underscores_ are a convenience thing so you can have your variable name be the same as your injected service.
        inject(function (_OrderService_, _$httpBackend_) {
            OrderService = _OrderService_;
            $httpBackend = _$httpBackend_;
        });
    });
    
    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
     
    it('should retrieve response object containing orders.', function () {
        // set up some data for the http call to return and test later.
        var returnedData = {d: [
                {
                    id: 1,
                    date: '2017-03-21 09:10:50'
                },
                {
                    id: 2,
                    date: '2017-03-21 10:20:50'
                }
            ]};
            
        // expectGET to make sure this is called once.
        $httpBackend.expectGET('/api/orders').respond(returnedData);
                    
        // make the call.
        var orders = OrderService.query();
        
        expect(orders).toEqual({});
            
        // flush the backend to "execute" the request to do the expectedGET assertion.
        $httpBackend.flush();
        
        expect(orders).toEqual(returnedData);
    });
});