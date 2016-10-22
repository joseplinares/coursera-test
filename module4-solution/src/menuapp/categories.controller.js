(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['listCateg'];
function CategoriesController(listCateg) {
  console.log("CategoriesController");
  var categCtl = this;
  categCtl.listCateg = listCateg.data;
  console.log("CategoriesController", listCateg);
  console.log("CategoriesController", listCateg.data);
}
})();
