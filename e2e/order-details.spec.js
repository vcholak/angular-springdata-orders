(function () {
    'use strict';
    
    describe('order details view', function() {

        beforeEach(function() {
            browser.get('index.html#!/orders/1');
        });

        it('should render order details when user navigates to /orders/1', function () {
            expect(element.all(by.css('[ng-view] h2')).first().getText()).toMatch(/Order Details/);
        });
    });
}());