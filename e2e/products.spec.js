(function () {
    'use strict';
    
    describe('products view', function() {

        beforeEach(function() {
            browser.get('index.html#!/products');
        });

        it('should render products when user navigates to /products', function () {
            expect(element.all(by.css('[ng-view] h2')).first().getText()).toMatch(/List of Products/);
        });
    });
}());