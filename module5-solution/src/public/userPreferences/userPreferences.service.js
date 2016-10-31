(function () {
"use strict";

angular.module('public')
.service('UserPreferencesService', UserPreferencesService);


UserPreferencesService.$inject = [];
function UserPreferencesService() {
  var service = this;
  service.userPreferences = null;

  service.setUserPreferences = function(preferences) {
    service.userPreferences = preferences;
  }

  service.getUserPreferences = function() {
    return service.userPreferences;
  }
}

})();
