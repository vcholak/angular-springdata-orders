'use strict';

describe('app.home module', function() {

  beforeEach(module('app.home'));

  describe('home controller', function(){

    it('should be defined', inject(function($controller) {
      //spec body
      var homeCtrl = $controller('HomeController');
      expect(homeCtrl).toBeDefined();
    }));

  });
});
