(function () {
    'use strict';
    
    describe('orders view', function() {

        beforeEach(function() {
            browser.get('index.html#!/orders');
        });

        it('should render orders when user navigates to /orders', function () {
            expect(element.all(by.css('[ng-view] h2')).first().getText()).toMatch(/List of Orders/);
        });
    });
}());