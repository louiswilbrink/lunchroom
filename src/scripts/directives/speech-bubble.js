'use strict'

angular.module('lunchRoom')
    .directive('speechBubble', ['$rootScope', '$window', function ($rootScope, $window) {
    
    var directiveDefinitionObject = {
        template: '<div class="speech-bubble"></div>',
        restrict: 'A',
        controller: function () {

            var scene = FamousEngine.createScene('.speech-bubble');
            console.log(scene);

            var startingPosition = [
                    0, // X
                    250  // Y
                ];

            var endingPosition = [
                    0, // X
                    50 // Y
                ];

            var myNode = scene.addChild();

            var mySize = new Size(myNode)
                .setMode('absolute', 'absolute', 'absolute')
                .setAbsolute(300, 150);

            var myDOMElement = new DOMElement(myNode)
                .setProperty('background-color', 'lightblue')
                .setProperty('opacity', '0')
                .setContent('Famous!');

            var myPosition = new Position(myNode)
                .set(startingPosition[0], startingPosition[1]);

            // Set transitionable to start from the starting position.
            var transitionY = new Transitionable(startingPosition[1]);
            var transitionOpacity = new Transitionable(0);

            FamousEngine.init();

            var myUpdateId = myNode.addComponent({
                // Transition the speech bubble up and fade opacity.
                onUpdate: function (time) {
                    var newY = transitionY.get();
                    var newOpacity = transitionOpacity.get();
                    myPosition.setY(newY);
                    myDOMElement.setProperty('opacity', newOpacity);

                    if (transitionY.isActive() || transitionOpacity.isActive()) {
                        myNode.requestUpdate(myUpdateId);
                    }
                }
            });

            $rootScope.$on('messageComposed', function () {
                // Reset position and transparency.
                myPosition.set(startingPosition[0], startingPosition[1]);
                transitionY.set(startingPosition[1]);
                transitionOpacity.set(0);

                $rootScope.speechBubble = $rootScope.message;
                $rootScope.message = 'Start typing';
                $rootScope.$digest();

                transitionY.set(endingPosition[1], { duration: 1000, curve: 'outQuint' });
                transitionOpacity.set(1, { duration: 200 });

                myDOMElement.setContent($rootScope.speechBubble);

                myNode.requestUpdate(myUpdateId);
            });

        }
    };

    return directiveDefinitionObject;
}]);
