(function () {
    'use strict';
    
    describe('product details view', function() {

        beforeEach(function() {
            browser.get('index.html#!/products/1');
        });

        it('should render product details when user navigates to /products/1', function () {
            expect(element.all(by.css('[ng-view] h2')).first().getText()).toMatch(/Product Details/);
        });
    });
}());