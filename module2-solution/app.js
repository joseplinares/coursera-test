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
  alreadyBoughtCtl.alreadyBoughtList = ShoppingListCheckOffService.getAlreadyBoughtList();
}

function ShoppingListCheckOffService() {
  var service = this;
  var items = [{name: "cookies", quantity: 15},{name:"apples", quantity:12}, {name:"oranges", quantity:3}, {name:"chips", quantity:1}, {name:"spaghetti", quantity:4}];
  var alreadyBoughtList = [];


  service.getItems = function() {
    return items;
  };

  service.getAlreadyBoughtList = function() {
    return alreadyBoughtList;
  };

  service.moveToBoughtList = function(itemIndex) {
    // New itrm to be added in the already bought list
    var item = {
      name: items[itemIndex].name,
      quantity: items[itemIndex].quantity
    };
    // Remove item from the buy list
    items.splice(itemIndex, 1);
    // Add item to the already bought list.
    alreadyBoughtList.push(item);
  };

}

})();
