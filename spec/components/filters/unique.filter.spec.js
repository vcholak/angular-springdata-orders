describe('unique filter', function () {
    'use strict';
    
    var filter,
        products = [{
                        name: "Kayak",
                        category: {
                            name: 'Watersports'
                        }
                    },
                    {
                        name: 'Life Jacket',
                        category: {
                            name: 'Watersports'
                        }
                    },
                    {
                        name: 'Soccer Ball',
                        category: {
                            name: 'Soccer'
                        }
                    }
                    
        ];
    
    beforeEach(function () {
        module('app.filter');
        inject(function ($filter) {
            filter = $filter;
        });
    });
    
    it('should return 2 categories', function () {                
        var unique = filter('unique');
        console.log('unique is a function: ' + angular.isFunction(unique));
        
        expect(unique(products, 'category')).toEqual(['Watersports', 'Soccer']);
    });
});