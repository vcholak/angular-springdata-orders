(function () {
    'use strict';
    
    describe('customers view', function() {

        beforeEach(function() {
            browser.get('index.html#!/customers');
        });

        it('should render customers when user navigates to /customers', function() {
            expect(element.all(by.css('[ng-view] h2')).first().getText()).toMatch(/List of Customers/);
        });
    });
}());