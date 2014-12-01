'use strict';

var app = angular.module('app', [
	'ngResource',
	'ngRoute'])

.config(['$routeProvider',function ($routeProvider) {

//			delete $http.defaults.headers.common["X-Requested-With"];

	$routeProvider
			.when('/', {
				templateUrl: 'views/powerDreas.html',
				controller: 'PowerDreasCtrl',
				controllerAs: 'Power'
			})
    .when('/parsed-url/:url', {
      templateUrl: 'views/powerDreas.html',
      controller: 'PowerDreasCtrl',
      controllerAs: 'Power'


    })

}]);
