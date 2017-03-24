(function () {
    'use strict';
    
    describe('home view', function() {

        beforeEach(function() {
            browser.get('index.html#!/home');
        });

        it('should render home view when user navigates to /home', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).toMatch(/partial for home/);
        });
    });
}());