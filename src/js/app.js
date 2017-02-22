(function() {
    'use strict';

    const app = angular.module('shopular', []);
    app.controller('ShopController', function(inventoryService, $q) {
      this.products = {};
      this.tax = 5.75;
        $q.when(inventoryService.get()).then((response) => {
            this.products = response.data;
            console.log(this.products);
        });
      });

})();
