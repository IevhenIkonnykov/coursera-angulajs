(function() {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject=['UserService'];
function UserInfoController (UserService){
  var $ctrl = this;

  $ctrl.registrationStatus = false;
  $ctrl.user = UserService.getUserData();

  if ($ctrl.user.firstName === undefined){
    $ctrl.registrationStatus = false;
  } else {
    $ctrl.registrationStatus = true;
  };
}

})();
