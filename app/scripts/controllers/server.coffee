'use strict'

###*
 # @ngdoc function
 # @name alarmApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the alarmApp
###
angular.module('alarmApp')
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
