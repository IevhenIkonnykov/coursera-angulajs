(function (){
  'use strict';

  angular.module ('LunchCheck', [])
  . controller ('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope){
    $scope.message = '';
    $scope.lunchMenu = '';

    $scope.checkMenu = function () {
      var menu = [];
      var quantity = 0;
      if ($scope.lunchMenu == "") {
        $scope.message = 'Please enter data first';
      } else {
        menu = $scope.lunchMenu.split(',');
        for (var i = 0; i < menu.length; i++){
          if (menu[i].trim() != ""){
            quantity++;
          }
        }
        if (quantity > 3) {
          $scope.message = 'Too much!';
        }
        if (quantity > 0 && quantity < 3) {
          $scope.message = 'Enjoy!';
        }
        if (quantity == 0) {
          $scope.message = 'Do not you eat at all?';
        }
        }
      }
    }
  }

})();
