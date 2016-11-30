/**
 * Created by mchemingway0031 on 11/29/2016.
 * script.js
 */

// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/module1', {
            templateUrl: 'pages/module1.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/module2', {
            templateUrl : 'pages/module2.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope) {
    // create a message to display in our view
   $scope.message = 'Click on any of modules on the top bar to get started';
});

scotchApp.controller('aboutController', function($scope) {

});

scotchApp.controller('contactController', function($scope) {

});