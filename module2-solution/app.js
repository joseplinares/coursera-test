(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtl = this;
  toBuyCtl.items = ShoppingListCheckOffService.getItems();

  toBuyCtl.moveToBoughtList =  function (itemIndex) {
    ShoppingListCheckOffService.moveToBoughtList(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtCtl = this;
}

function ShoppingListCheckOffService() {
  var service = this;
  var items = [{name: "cookies", quantity: 15},{name:"item1", quantity:12}, {name:"item2", quantity:3}, {name:"item3", quantity:1}];

  service.getItems = function() {
    return items;
  };

  service.moveToBoughtList = function(itemIndex) {
    items.splice(itemIndex, 1);
  };
}

})();
