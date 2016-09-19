function ShoppingCartCtrl($scope, shoppingCartService) {
  var self = this;
  
  
  self.cartItems = shoppingCartService.cartItems;
  
  this.removeFromCart = removeFromCart;
  
  $scope.$on('addToCart', function(event, item) {
    shoppingCartService.addItem(item);
  });
  
  function removeFromCart(index) {
    var item = self.cartItems[index];
    self.cartItems[index].qty = item.qty - 1;
    
    if(self.cartItems[index].qty < 1) {
      shoppingCartService.removeItem(index);
    }
  }
}
ShoppingCartCtrl.$inject = ['$scope', 'shoppingCartService'];

var shoppingCart = {
  template: `
    <h1 class="jumbotron text-center">Shopping Cart</h1>
    <ul>
      <li ng-repeat='item in $ctrl.cartItems track by $index'>
        {{item.label}} @{{item.cost | currency}} &times; {{item.qty}}: {{item.cost * item.qty | currency}}
        <button type="button" class="btn btn-success btn-block" ng-click="$ctrl.removeFromCart($index)">Remove Item</button>
      </li>
    </ul>
  `,
  controller: ShoppingCartCtrl
};

angular
  .module('app')
  .component('shoppingCart', shoppingCart);