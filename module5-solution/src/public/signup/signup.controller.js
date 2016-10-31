(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http', 'UserPreferencesService'];
function SignUpController($http, UserPreferencesService) {
  var signUpCtrl = this;
  signUpCtrl.firstName = '';
  signUpCtrl.lastName = '';
  signUpCtrl.email = '';
  signUpCtrl.phone = '';
  signUpCtrl.favoriteDishNumber = '';
  signUpCtrl.serviceOK = false;
  signUpCtrl.serviceError = false;

  signUpCtrl.saveUserPreferences = function() {
    console.log("URL:", "https://joseplinares-restaurant.herokuapp.com/menu_items/" + signUpCtrl.favoriteDishNumber + ".json")
    $http.get('https://joseplinares-restaurant.herokuapp.com/menu_items/' + signUpCtrl.favoriteDishNumber + '.json')
    .then(function (response) {
      console.log("Respuesta", response);
      UserPreferencesService.setUserPreferences({
        firstName: signUpCtrl.firstName,
        lastName: signUpCtrl.lastName,
        email: signUpCtrl.email,
        phone: signUpCtrl.phone,
        favoriteDish: {
          number: signUpCtrl.favoriteDishNumber,
          name: response.data.name,
          description: response.data.description
        }
      });
      signUpCtrl.serviceOK = true;
      signUpCtrl.serviceError = false
    })
    .catch(function (error) {
      console.log("Entrando por catch", error);
      signUpCtrl.serviceOK = false;
      signUpCtrl.serviceError = true;
    });
  }
}


})();
