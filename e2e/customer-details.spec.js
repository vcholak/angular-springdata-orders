(function () {
    'use strict';
    
    describe('customer details view', function() {

        beforeEach(function() {
            browser.get('index.html#!/customers/1');
        });

        it('should render customer details when user navigates to /customers/1', function() {
            expect(element.all(by.css('[ng-view] h2')).first().getText()).toMatch(/Customer Details/);
        });
    });
}());