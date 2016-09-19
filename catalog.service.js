function CatalogService($q, $http, $timeout) {
  var self = this;
  self.products = [];
  
  this.getProducts = function() {
    // Check if `self.products` has already been populated. Return this if it it the case
    // If not, load data from './products.json'; Save the products to `self.products`
    // Make sure you return a promise an both cases
    var deferred = $q.defer();
    if(self.products.length > 0) {
      $timeout(deferred.resolve(self.products), 100);
    } else {
      $http.get('./products.json').then(function(res){
        self.products = res.data;
        deferred.resolve(self.products);
      },function(err) {
        deferred.reject(err);
      });
    }
    
    return deferred.promise;
  };
  
}
CatalogService.$inject = ['$q', '$http','$timeout'];

angular.module('app')
  .service('catalogService', CatalogService);