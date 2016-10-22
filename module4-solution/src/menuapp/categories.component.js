(function(){
'use strict'

  angular.module('MenuApp').component('listCateg', {
    templateUrl: 'src/menuapp/templates/categories-component.template.html',
    bindings: {
      categories: '<'
    }
  });

})()
