(function() {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject=['UserService', '$http'];
function SignUpController (UserService, $http){
  var $ctrl = this;

  $ctrl.menuNumberError = false;
  $ctrl.saveStatus = false;

  $ctrl.submit = function(){
    var responseStatus = $ctrl.checkServer($ctrl.menuNumber);
    responseStatus.then(function(response){
      if (response.status===500){
        $ctrl.menuNumberError =true;
        console.log("No such menu number exists");
      };

      if (response.status===200){
        $ctrl.saveStatus = true;
        $ctrl.menuNumberError =false;
        UserService.setUserData($ctrl.firstName, $ctrl.lastName, $ctrl.email, $ctrl.phoneNumber, $ctrl.menuNumber,
          response.data.name, response.data.description, response.data.category_short_name);
      };
    });
  };

  $ctrl.checkServer = function(menuNumber){
    return ($http({
        method: "GET",
        url: "https://ikonnykov-coursera.herokuapp.com/menu_items/" + menuNumber + ".json"
      })
      .then(function (result) {
        return result;
      }, function (result){
        return result;
      })
    );
  };
}

})();
