'use strict'

###*
 # @ngdoc function
 # @name alarmApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the alarmApp
###
angular.module('alarmApp')
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
