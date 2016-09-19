function AppCtrl($http) {
    var self = this;
    
    self.$onInit = function() {
      
    };
}
AppCtrl.$inject = ['$http'];

var app = {
  template: `
    <catalog></catalog>
    <hr />
    <shopping-cart></shopping-cart>
  `,
  controller: AppCtrl
};

angular
  .module('app')
  .component('app', app);