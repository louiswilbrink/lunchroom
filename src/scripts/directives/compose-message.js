'use strict'

angular.module('lunchRoom')
    .directive('composeMessage', ['$rootScope', function ($rootScope) {
    
    var directiveDefinitionObject = {
        template: '<div>{{ message }}</div>',
        restrict: 'A'
    };

    return directiveDefinitionObject;
}]);
