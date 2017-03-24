(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('EnterOrderController', EnterOrderController);

    EnterOrderController.$inject = ['SpringDataRestAdapter', 'CustomerService', 'ProductService', 'OrderService', 'OrderItemService', 'pageSize',                       'activeProductClass', 'defaultSalesRep', '$location'];

    var cartData = [];
    
    /* @ngInject */
    function EnterOrderController(SpringDataRestAdapter, CustomerService, ProductService, OrderService, OrderItemService, pageSize, activeProductClass,         defaultSalesRep, $location) {
        var vm = this,
            resource = CustomerService.query(),
            resource2 = ProductService.query();
              
        SpringDataRestAdapter.process(resource.$promise).then(function (processedResponse) {
            vm.customers = processedResponse._embeddedItems;
        });
        
        SpringDataRestAdapter.process(resource2.$promise, 'category', true).then(function (processedResponse) {
            vm.products = processedResponse._embeddedItems;
        });
        
        vm.selectedPage = 1;
        vm.pageSize = pageSize;
        vm.selectedCategory = null;
                                
        vm.addItem = function (id, name, price) {
            
            var i, addedToExistingItem = false;
            for (i = 0; i < cartData.length; i += 1) {
                if (cartData[i].id === id) {
                    cartData[i].amount += 1;
                    addedToExistingItem = true;
                    break;
                }
            }
            if (!addedToExistingItem) {
                cartData.push({
                    amount: 1,
                    id: id,
                    price: price,
                    name: name
                });
            }
        };
        
        vm.addProductToCart = function (product) {
            vm.addItem(product.id, product.name, product.price);
        };
        
        vm.selectPage = function (newPage) {
            vm.selectedPage = newPage;
        };
                      
        vm.selectCategory = function (newCategory) {
            vm.selectedCategory = newCategory;
            vm.selectedPage = 1;
        };
        
        vm.categoryFilter = function (product) {
            return vm.selectedCategory === null ||
                product.category.name === vm.selectedCategory;
        };

        vm.getCategoryClass = function (category) {
            return vm.selectedCategory === category ? activeProductClass : "";
        };

        vm.getPageClass = function (page) {
            return vm.selectedPage === page ? activeProductClass : "";
        };
                                
        vm.total = function () {
            var total = 0, i;
            for (i = 0; i < cartData.length; i += 1) {
                total += (cartData[i].price * cartData[i].amount);
            }
            return total;
        };

        vm.itemCount = function () {
            var total = 0, i;
            for (i = 0; i < cartData.length; i += 1) {
                total += cartData[i].amount;
            }
            return total;
        };

        vm.removeItem = function (id) {
            var i;
            for (i = 0; i < cartData.length; i += 1) {
                if (cartData[i].id === id) {
                    cartData[i].amount -= 1;
                    
                    if (cartData[i].amount === 0) {
                        cartData.splice(i, 1);
                    }
                    break;
                }
            }
        };
        
        vm.cartItems = function () {
            return cartData;
        };
        
        vm.placeOrder = function (customerId) {
            
            var customer, customerUrl, order;
            
            customer = vm.customers.find(function (element) {
                return element.id == customerId; // use == because customerId: String 
            });
            console.log('Customer: ' + angular.toJson(customer));
            
            customerUrl = customer._links.self.href;
            console.log('customerUrl: ' + customerUrl);
                                                
            order = {date: new Date(), customer: customerUrl, salesRep: defaultSalesRep};
                                                          
            function orderSuccess(value) {
                
                var i, item, product, productUrl, orderItem,
                    orderId = value.id,
                    orderUrl = value._links.self.href,
                    allItemsSuccess = true; // just initial assumption
                
                console.log('Order URL: ' + orderUrl);
                
                function orderItemSuccess(value) {
                    console.log('Got OrderItem ID: ' + value.id);
                }
                
                function orderItemError(httpResponse) {
                    var error = angular.toJson(httpResponse);
                    console.log('Error: ' + error);
                    alert('Error while processing order item: ' + error);
                    allItemsSuccess = false;
                }
                
                function findElementById(element) {
                    return element.id === item.id;
                }
                
                // nested calls for each order item
                for (i = 0; i < cartData.length; i += 1) {
                    
                    item = cartData[i];
                    console.log('Processing item: ' + angular.toJson(item));
                    
                    // get product URL from vm.products                    
                    product = vm.products.find(findElementById);
                    console.log('Processing product: ' + angular.toJson(product));
                    
                    productUrl = product._links.self.href;
                    console.log('Product URL: ' + productUrl);
                    
                    orderItem = { order: orderUrl, product: productUrl, amount: item.amount};
                    OrderItemService.save(orderItem, orderItemSuccess, orderItemError);
                }
                
                if (allItemsSuccess) {
                    cartData.length = 0; // clean cart
                    alert('Order completed successfully. \n\nUse order ID: ' + orderId + ' for your reference.');
                    $location.path('/orders');
                } else {
                    alert('There were error(s) while processing order.');
                }
            }
            
            function orderError(httpResponse) {
                var error = angular.toJson(httpResponse);
                console.log('Error: ' + error);
                alert('Error while processing order: ' + error);
            }
            
            OrderService.save(order, orderSuccess, orderError);
        };
    }
}());