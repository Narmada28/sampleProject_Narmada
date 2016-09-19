function CatalogCtrl(catalogService) {
  var self = this;
  self.$onInit = function() {
    catalogService.getProducts().then(function(products) {
      self.products = products;  
      console.log(self.products);
    });
  };
}
CatalogCtrl.$inject = ['catalogService'];

var catalog = {
  template: `
  <div>
    <h1 class="jumbotron text-center">Catalog</h1>
    <ul>
      <li ng-repeat='item in $ctrl.products'>
        <catalog-item item='item'></catalog-item>
      </li>
    </ul>
    </div>
  `,
  controller: CatalogCtrl
};

angular
  .module('app')
  .component('catalog', catalog);