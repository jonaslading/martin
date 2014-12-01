"use strict";

app.controller('PowerDreasCtrl', ['$routeParams','URLInterceptor','$location', function ($routeParams, URLInterceptor, $location) {
  //Save reference to controller in order to avoid reference soup
  var Power = this;

  if ($routeParams.url != null) {
    Power.setting = URLInterceptor.decode($routeParams.url);
  } else {
    Power.setting = 'http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/space-wallpapers-1.jpg';
  }
  Power.update = function(url) {
    Power.navigateTo(url);
   // Power.setting = url;
    //Power.$apply();
  };
  Power.navigateTo = function (path) {
    $location.path('/url/' + path);
  };


}]);
