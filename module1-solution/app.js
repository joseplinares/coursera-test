(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.items = "";
    $scope.message = "";

    $scope.checkItems = function () {
      var totalItems = 0;
      $scope.message = "Please enter data first";

      var items = $scope.items.split(',');

      for (var i = 0; i < items.length; i++) {
        if (items[i].trim() !== '') {
          totalItems ++;
        }
      }

      if ( totalItems > 0 ) {
        if ( totalItems<= 3 ) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      }
    };
  }


})();
