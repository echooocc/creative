'use strict'

###*
 # @ngdoc overview
 # @name navApp
 # @description
 # # navApp
 #
 # Main module of the application.
###
nav = angular.module('navApp', ['ui.bootstrap','ngRoute'])
nav.config ['$routeProvider', ($routeProvider) ->
  $routeProvider
    .when '/', {
      controller: 'MainCtrl'
      templateUrl: 'templates/main.html'
    }
    .when '/alarm', {
      controller: 'SubCtrl'
      templateUrl: 'templates/sub.html'
    }
]
