'use strict'

###*
 # @ngdoc function
 # @name navApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the navApp
###
nav = angular.module('navApp' )
nav.controller 'MainCtrl', ($scope) ->
  $scope.lists = []
  $scope.addList = () ->
    $scope.lists.push($scope.listitem)
    $scope.listitem = " "

