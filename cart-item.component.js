function CartItemCtrl() {
  var self = this;
  
}
CartItemCtrl.$inject = [];

var item = {
  template: `
    <div>{{$ctrl.item.label}} &mdash; {{$ctrl.item.cost | currency}} &mdash; Qty: {{$ctrl.item.qty}}</div>
  `,
  bindings: {
    item: '<'
  },
  controller: CartItemCtrl
  
};

angular
  .module('app')
  .component('cartItem', item);