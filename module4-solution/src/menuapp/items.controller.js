(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// 'item' is injected through state's resolve
ItemsController.$inject = ['listItems']
function ItemsController(listItems) {
  var itemsCtrl = this;
  console.log("ItemsController.listItems:", listItems.data.menu_items);
  itemsCtrl.listItems = listItems.data.menu_items;
}

})();
