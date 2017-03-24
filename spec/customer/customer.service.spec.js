describe('CustomerService', function () {
    'use strict';
            
    var $httpBackend,
        CustomerService;
    
    beforeEach(function () {
    
        // load the modules
        module('ngResource');
        module('app.customer');
        
        jasmine.addCustomEqualityTester(angular.equals);
    
        // inject your service for testing.
        // The _underscores_ are a convenience thing so you can have your variable name be the same as your injected service.
        inject(function (_CustomerService_, _$httpBackend_) {
            CustomerService = _CustomerService_;
            $httpBackend = _$httpBackend_;
        });
    });
    
    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
     
    it('should retrieve response object containing customers.', function () {
        // set up some data for the http call to return and test later.
        var returnedData = { d: [
                {
                    firstName: 'Oliver',
                    lastName: 'Trenton'
                },
                {
                    firstName: 'Brian',
                    lastName: 'Johnson'
                }
            ]};
            
        // expectGET to make sure this is called once.
        $httpBackend.expectGET('/api/customers').respond(returnedData);
                    
        // make the call.
        var customers = CustomerService.query();
        
        expect(customers).toEqual({});
    
        // flush the backend to "execute" the request to do the expectedGET assertion.
        $httpBackend.flush();

        expect(customers).toEqual(returnedData);
    });
});