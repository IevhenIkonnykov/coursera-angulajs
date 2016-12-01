(function () {

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories  = function () {
    return ($http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      })
      .then(function (result) {
        // List of all categories
        var categories = [];
        categories = result.data;
        console.log(categories)
        // return  categories
        return categories;
      })
    )};

  service.getItemsForCategory  = function (categoryShortName) {
    return ($http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
      })
      .then(function (result) {
        // List of all categories
        // List of items for a category
        var items = [];
        items = result.data.menu_items;
        // return  categories
        return items;
      })
    )};
  }

})();
