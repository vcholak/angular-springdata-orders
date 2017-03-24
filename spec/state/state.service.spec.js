describe('StateService', function () {
    'use strict';
    
    var $httpBackend,
        StateService;
    
    beforeEach(function () {
    
        // load the modules
        module('ngResource');
        module('app.state');
        
        jasmine.addCustomEqualityTester(angular.equals);
    
        // inject your service for testing.
        // The _underscores_ are a convenience thing so you can have your variable name be the same as your injected service.
        inject(function (_StateService_, _$httpBackend_) {
            StateService = _StateService_;
            $httpBackend = _$httpBackend_;
        });
    });
    
    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
     
    it('should retrieve response object containing states.', function () {
        // set up some data for the http call to return and test later.
        var returnedData = {d: [
                {
                    name: 'Oregon',
                    abbreviation: 'OR'
                },
                {
                    name: 'Washington',
                    abbreviation: 'WA'
                }
            ]};
            
        // expectGET to make sure this is called once.
        $httpBackend.expectGET('/api/states').respond(returnedData);
                    
        // make the call.
        var states = StateService.query();
        
        expect(states).toEqual({});
            
        // flush the backend to "execute" the request to do the expectedGET assertion.
        $httpBackend.flush();
        
        expect(states).toEqual(returnedData);
    });
});