describe('OrderItemService', function () {
    'use strict';
    
    var $httpBackend,
        OrderItemService;
    
    beforeEach(function () {
    
        // load the modules
        module('ngResource');
        module('app.order');
        
        jasmine.addCustomEqualityTester(angular.equals);
    
        // inject your service for testing.
        // The _underscores_ are a convenience thing so you can have your variable name be the same as your injected service.
        inject(function (_OrderItemService_, _$httpBackend_) {
            OrderItemService = _OrderItemService_;
            $httpBackend = _$httpBackend_;
        });
    });
    
    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
     
    it('should retrieve response object containing order item.', function () {
        // set up some data for the http call to return and test later.
        var returnedData = {
                id: 1,
                amount: 2
            };
            
        // expectGET to make sure this is called once.
        $httpBackend.expectGET('/api/orderItems/1').respond(returnedData);
                    
        // make the call.
        var item = OrderItemService.get({orderItemId: 1});
        
        expect(item).toEqual({});
            
        // flush the backend to "execute" the request to do the expectedGET assertion.
        $httpBackend.flush();
        
        expect(item).toEqual(returnedData);
    });
});