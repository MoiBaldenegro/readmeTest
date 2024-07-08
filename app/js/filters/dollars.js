'use strict';

foodMeApp.filter('dollars', function() {
  var DOLLARS = {
    1: '💵',
    2: '💵💵',
    3: '💵💵💵',
    4: '💵💵💵💵',
    5: '💵💵💵💵💵'
  }

  return function(dollarCount) {
    return DOLLARS[dollarCount]
  };
});
