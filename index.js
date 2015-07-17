'use strict';

angular.module('lunchRoom', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'src/views/main.html',
            controller: 'MainController'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
