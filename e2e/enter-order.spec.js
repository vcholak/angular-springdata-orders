(function () {
    'use strict';
    
    describe('enter order view', function() {

        beforeEach(function() {
            browser.get('index.html#!/orders/enter');
        });

        it('should render enter order view when user navigates to /orders/enter', function () {
            expect(element.all(by.css('[ng-view] h2')).first().getText()).toMatch(/Enter Order/);
        });
    });
}());