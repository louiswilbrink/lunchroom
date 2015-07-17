'use strict'

angular.module('lunchRoom')
    .directive('composeWithKeystrokes', ['$rootScope', '$document', function ($rootScope, $document) {
    
    $rootScope.message = '';

    var directiveDefinitionObject = {
        restrict: 'A',
        controller: function ($element) {

            $rootScope.message = 'Start typing';

            $document.on('keydown', function (event) {
                if (event.which === 8) {
                    event.preventDefault();
                    $rootScope.message = $rootScope.message.slice(0, -1);
                    $rootScope.$digest();
                }
            });

            $element.on('keypress', function (event) {
                if ($rootScope.message === 'Start typing') {
                    $rootScope.message = '';
                }

                if (event.which !== 13) {
                    $rootScope.message += String.fromCharCode(event.keyCode);
                    $rootScope.$digest();
                }
                else {
                    // Send to famous DOMElement.
                    $rootScope.$broadcast('messageComposed');
                }
            });
        }
    };

    return directiveDefinitionObject;
}]);
