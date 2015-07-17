'use strict'

angular.module('lunchRoom')
    .directive('composeMessage', ['$rootScope', function ($rootScope) {
    
    var directiveDefinitionObject = {
        template: '<div class="message">{{ message }}</div>',
        restrict: 'E'
    };

    return directiveDefinitionObject;
}]);
