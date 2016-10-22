(function(){
'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];

  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function () {
      console.log("MenuDataService:Entrando");
      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      });
      // return a promise
      return response;
    };

    service.getItemsForCategory = function(categoryShortName)  {
      var response = $http({
        method: "GET",
        url:" https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
      });
      // Retrun a promise
      return response;
    }
  }
})();
