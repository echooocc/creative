'use strict'

###*
 # @ngdoc overview
 # @name alarmApp
 # @description
 # # alarmApp
 #
 # Main module of the application.
###
alarm = angular.module('alarmApp', ['ui.bootstrap','ngRoute'])
alarm.config ['$routeProvider', ($routeProvider) ->
  $routeProvider
    .when '/', {
      controller: 'TimePickerCtrl'
      templateUrl: 'templates/time.html'
    }
    .when '/alarm', {
      controller: 'AlarmCtrl'
      templateUrl: 'templates/alarm.html'
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
   

alarm.controller 'AlarmCtrl', ($scope) ->
 


