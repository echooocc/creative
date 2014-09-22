'use strict'

###*
 # @ngdoc function
 # @name alarmApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the alarmApp
###
alarm = angular.module('alarmApp', ['ui.bootstrap','ngRoute'])
alarm.config ['$routeProvider', ($routeProvider) ->
  $routeProvider
    .when '/', {
      controller: 'TimePickerCtrl'
      templateUrl: 'templates/index.html'
    }
    .when '/alarm', {
      controller: 'AlarmCtrl'
      templateUrl: 'templates/index.html'
    }
    
]

alarm.controller 'TimePickerCtrl', ($scope) ->
  $scope.mytime = Date()
  $scope.months = [
    {name:'JAN'},
    {name:'FEB'},
    {name:'MAR'},
    {name:'APR'},
    {name:'MAY'},
    {name:'JUN'},
    {name:'JUL'},
    {name:'AUG'},
    {name:'SEP'},
    {name:'OCT'},
    {name:'NOV'},
    {name:'DEC'}
  ]
  $scope.selectMonth=$scope.months[8]
  $scope.changed = () ->
    console.log('Time changed to' + $scope.mytime)
  $scope.submit = ()->
    console.log('hi')

alarm.controller 'AlarmCtrl', ($scope) ->
  alert('hi')