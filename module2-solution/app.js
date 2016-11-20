(function (){
  'use strict';

  angular.module ('ShoppingListCheckOff', [])
  .controller ('ToBuyController', ToBuyController)
  .controller ('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyCtrl = this;
    toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

    toBuyCtrl.bought = function(itemIndex){
      ShoppingListCheckOffService.moveToBoughtList(itemIndex);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtCtrl = this;
    boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
      {name: "cookies", quantity: 10},
      {name: "chips", quantity: 5},
      {name: "cakes", quantity: 7},
      {name: "candies", quantity: 3},
      {name: "discs", quantity: 4}
    ];
    var boughtItems = [];

    service.getToBuyItems = function (){
      return toBuyItems;
    };

    service.getBoughtItems = function (){
      return boughtItems;
    };

    service.moveToBoughtList = function (itemIndex){
      boughtItems.push (toBuyItems[itemIndex]);
      toBuyItems.splice (itemIndex, 1);
    };
  }

})();
