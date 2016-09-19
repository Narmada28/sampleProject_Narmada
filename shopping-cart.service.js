function ShoppingCartService() {
  var self = this;
  self.cartItems = [];
  
  this.addItem = function(item) {
    var existingItem = _.find(self.cartItems, {id: item.id});
  
    if(existingItem) {
      existingItem.qty++;
    }else {
      item.qty = 1;
      self.cartItems.push(item);
    }
  };
  
  this.removeItem = function(index) {
    self.cartItems.splice(index,1);
  };
}
ShoppingCartService.$inject = [];

angular.module('app')
  .service('shoppingCartService', ShoppingCartService);