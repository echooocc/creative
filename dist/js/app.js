(function() {
  'use strict';

  /**
    * @ngdoc overview
    * @name navApp
    * @description
    * # navApp
    *
    * Main module of the application.
   */
  var nav;

  nav = angular.module('navApp', ['ui.bootstrap', 'ngRoute']);

  nav.config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        controller: 'MainCtrl',
        templateUrl: 'templates/main.html'
      }).when('/alarm', {
        controller: 'SubCtrl',
        templateUrl: 'templates/sub.html'
      });
    }
  ]);

}).call(this);

(function() {
  'use strict';

  /**
    * @ngdoc function
    * @name navApp.controller:AboutCtrl
    * @description
    * # AboutCtrl
    * Controller of the navApp
   */
  var nav;

  nav = angular.module('navApp');

  nav.controller('MainCtrl', function($scope) {
    $scope.lists = [];
    return $scope.addList = function() {
      $scope.lists.push($scope.listitem);
      return $scope.listitem = " ";
    };
  });

}).call(this);

(function() {
  'use strict';

  /**
    * @ngdoc function
    * @name navApp.controller:AboutCtrl
    * @description
    * # AboutCtrl
    * Controller of the navApp
   */
  var nav;

  nav = angular.module('navApp');

  nav.directive('MainAnimate', function($scope) {});

}).call(this);
