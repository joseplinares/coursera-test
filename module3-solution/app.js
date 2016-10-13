(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm = '';

  menu.getMachedMenuItems = function() {
    menu.found = [];
    MenuSearchService.getMachedMenuItems(menu.searchTerm).then(function (result) {
      menu.found = result;
    });
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMachedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
      var listFound = [];
      var menuItems = response.data.menu_items;
      for (var i = 0; i < menuItems.length; i++) {
        //console.log(menuItem);
        if (menuItems[i].description.indexOf(searchTerm) !== -1) {
          listFound.push({
            name: menuItems[i].name,
            short_name: menuItems[i].short_name,
            description: menuItems[i].description,
          });
        }
      }
      console.log(listFound);
      return listFound;

    })
    .catch(function (error) {
      console.log("Error!:", error);
    })
  };

}

})();
