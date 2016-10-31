(function () {
"use strict";

angular.module('public')
.controller('UserPreferencesController', UserPreferencesController);

UserPreferencesController.$inject = ['UserPreferencesService'];
function UserPreferencesController(UserPreferencesService) {
  var userPrefCtrl = this;
  userPrefCtrl.userPref = UserPreferencesService.getUserPreferences();

  userPrefCtrl.logged = false;
  if ( userPrefCtrl.userPref != null ) {
    userPrefCtrl.logged = true;
  }
}


})();
