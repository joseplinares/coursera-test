(function(){
'use strict'

  angular.module('MenuApp').component('listItems', {
    templateUrl: 'src/menuapp/templates/items-component.template.html',
    bindings: {
      items: '<'
    }
  });

})()
