describe('pager filter', function () {
    'use strict';
    
    var filter;
    
    beforeEach(function () {
        module('app.filter');
        inject(function($filter) {
            filter = $filter;
        });
    });
    
    it('should have 2 pages for 8 elements...', function() {
        var data = [1, 2, 3, 4, 5, 6, 7, 8],
            pageSize = 5;
        
        var pager = filter('pager');        
        
        expect(pager(data, pageSize)).toEqual([0, 1]); 
    });
});