(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);

function UserService() {
  var service = this;

  var user = {};

  service.setUserData = function (firstName, lastName, email, phoneNumber, menuNumber,
    menuTitle, menuDescription, categoryShortName) {
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.menuNumber = menuNumber;
    user.menuTitle = menuTitle;
    user.menuDescription = menuDescription;
    user.categoryShortName = categoryShortName;
  };

  service.getUserData = function () {
    return user;
  };
}

})();
