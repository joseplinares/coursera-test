(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig );

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoriesController as categCtl',
    resolve: {
       listCateg: ['MenuDataService', function (MenuDataService) {
         return MenuDataService.getAllCategories();
       }]
     }
  })

  .state('categories.items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
       listItems: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
         console.log("Resolviendo datos para los intems", $stateParams);
         return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
       }]
     }
  });
}

})();
