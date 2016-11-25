(function (){
  'use strict';

  angular.module ('NarrowItDownApp', [])
  .controller ('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService', '$q'];
  function NarrowItDownController(MenuSearchService, $q){
    var ctrl = this;
    ctrl.found = [];
    ctrl.term = "";
    ctrl.error = false;

    ctrl.find = function(){
      if (ctrl.term == ''){
        ctrl.error = true;
        ctrl.found = [];
      } else {
        var promise = MenuSearchService.getMatchedMenuItems(ctrl.term);
        promise.then(function (response) {
          ctrl.found = response;
          if (ctrl.found.length == 0) {
            ctrl.error = true;
          } else {
            ctrl.error = false;
          }
        });
      }
    };

    ctrl.removeItem = function(index){
      ctrl.found.splice(index, 1);
    };

  };

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerm){
      return ($http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      })
      .then(function (result) {
        // process result and only keep items that match
        var foundItems = [];
        for (var i=0; i<result.data.menu_items.length; i++){
          if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1){
            foundItems.push(result.data.menu_items[i]);
          }
        }

        // return processed items
        return foundItems;
      }));
    };
  };

  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItemsDirective.html',
      scope: {
        foundMenuItems: '<',
        error: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return ddo;
  };

  function FoundItemsDirectiveController() {
  };
})();
