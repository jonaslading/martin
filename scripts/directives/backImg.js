'use strict';

//Add class on scroll
angular.module('app')
	.directive('backImg', function(){
		return function(scope, element, attrs){
      attrs.$observe('backImg', function(value) {
        element.css({
          'background-image': 'url(' + value +')',
          'background-size' : 'cover'
        });
      });
/*			var url = attrs.backImg;
			element.css({
				'background-image': 'url(' + url +')',
				'background-size' : 'cover'
			});*/
		}
	})
  .service('URLInterceptor', function($rootScope, $location){
    // We listen to $routeChangeStart event and intercept it if
    // the path matches our url scheme. In this case, every route
    // beginning with /url/ will be caught
    $rootScope.$on('$routeChangeStart', function(e, next, current){

      // $location.path does change BEFORE actual routing happens,
      // so in this case we get parsed new location object
      // for free.

      // To be hones, a better way of handling this case might be using
      // $locationChangeStart event instead, but it would require us to parse urls
      // manually.
      var path = $location.path();
      // check if string begins with '/url/'
      var matcher = path.slice(0,5);
      var cleanPath = '';
      if (matcher === '/url/'){
        // Yes it does, yay!
        // Remove leading '/url/' to extract the actual parameter
        cleanPath = path.slice(5);
        // Encode our url to a safe version. We know that encodeURIComponent won't
        // work either, so a good choice might be base64.
        // I'm using https://code.google.com/p/javascriptbase64/downloads
        $location.path('/parsed-url/' + Base64.encode(cleanPath));
        // Prevent default event execution. Note that, it won't cancel related $location Events
        e.preventDefault();
      }
    });

    return {
      decode: Base64.decode,
      encode: Base64.encode
    }
  });