'use strict';

foodMeApp.controller('RestaurantsController',
    function RestaurantsController($scope, customer, $location, Restaurant) {

  if (!customer.address) {
    $location.url('/customer');
  }

  var filter = $scope.filter = {
    cuisine: [],
    price: null,
    rating: null
  };

  var allRestaurants = Restaurant.query(filterAndSortRestaurants);
  $scope.$watch('filter', filterAndSortRestaurants, true);

  function filterAndSortRestaurants() {
    $scope.restaurants = [];

    // filter
    angular.forEach(allRestaurants, function(item, key) {
      if (filter.price && filter.price !== item.price) {
        return;
      }

      if (filter.rating && filter.rating !== item.rating) {
        return;
      }

      if (filter.cuisine.length && filter.cuisine.indexOf(item.cuisine) === -1) {
        return;
      }

      $scope.restaurants.push(item);
    });


    // sort
    $scope.restaurants.sort(function(a, b) {
      if (a[filter.sortBy] > b[filter.sortBy]) {
        return filter.sortAsc ? 1 : -1;
      }

      if (a[filter.sortBy] < b[filter.sortBy]) {
        return filter.sortAsc ? -1 : 1;
      }

      return 0;
    });
  };


  $scope.sortBy = function(key) {
    if (filter.sortBy === key) {
      filter.sortAsc = !filter.sortAsc;
    } else {
      filter.sortBy = key;
      filter.sortAsc = true;
    }
  };


  $scope.sortIconFor = function(key) {
    if (filter.sortBy !== key) {
      return '';
    }

    return filter.sortAsc ? '\u25B2' : '\u25BC';
  };


  $scope.CUISINE_OPTIONS = {
    african: { name: 'African', emoji: '🌍' },
    american: { name: 'American', emoji: '🍔' },
    barbecue: { name: 'Barbecue', emoji: '🍖' },
    cafe: { name: 'Cafe', emoji: '☕' },
    chinese: { name: 'Chinese', emoji: '🥡' },
    'czech/slovak': { name: 'Czech / Slovak', emoji: '🥨' },
    german: { name: 'German', emoji: '🍺' },
    indian: { name: 'Indian', emoji: '🍛' },
    japanese: { name: 'Japanese', emoji: '🍣' },
    mexican: { name: 'Mexican', emoji: '🌮' },
    pizza: { name: 'Pizza', emoji: '🍕' },
    thai: { name: 'Thai', emoji: '🍜' },
    vegetarian: { name: 'Vegetarian', emoji: '🥗' }
};

});
