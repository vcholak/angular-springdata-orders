describe('range filter', function () {
    'use strict';
    
    var range,
        data,
        pageSize = 5;
    
    beforeEach(function () {
        module('app.filter');
        inject(function ($filter) {
            var filter = $filter;
            range = filter('range');
        });
        data = [1, 2, 3, 4, 5, 6, 7, 8];        
    });
    
    it('should return 1st page as [1, 2, 3, 4, 5]', function () {
        expect(range(data, 1, pageSize)).toEqual([1, 2, 3, 4, 5]);
    });
    
    it('should return 2nd page as [6, 7, 8]', function () {
        expect(range(data, 2, pageSize)).toEqual([6, 7, 8]);
    });
    
    it('should return an empty array for the 3rd page', function () {
        expect(range(data, 3, pageSize)).toEqual([]);
    });
});