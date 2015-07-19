'use strict'

angular.module('lunchRoom')
    .directive('speechBubble', ['$rootScope', '$window', function ($rootScope, $window) {
    
    var directiveDefinitionObject = {
        template: '<div class="speech-bubble">{{ speechBubble }}</div>',
        restrict: 'A',
        controller: function () {

            var scene = FamousEngine.createScene('.speech-bubble');
            console.log(scene);

            var startingPosition = [
                    ($window.innerWidth / 2) - 200, // X
                    ($window.innerHeight / 2) - 75  // Y
                ];

            var endingPosition = [
                    ($window.innerWidth / 2) - 200, // X
                    ($window.innerHeight / 2) - 400 // Y
                ];

            var myNode = scene.addChild();

            var mySize = new Size(myNode)
                .setMode('absolute', 'absolute', 'absolute')
                .setAbsolute(400, 150);

            var myDOMElement = new DOMElement(myNode)
                .setProperty('background-color', 'lightblue')
                .setProperty('opacity', '0')
                .setContent('Famous!');

            var myPosition = new Position(myNode)
                .set(startingPosition[0], startingPosition[1]);

            // Set transitionable to start from the starting position.
            var myTransitionable = new Transitionable([
                startingPosition[1], // Y
                0]);                 // Opacity

            FamousEngine.init();

            var myUpdateId = myNode.addComponent({
                // Transition the speech bubble up and fade opacity.
                onUpdate: function (time) {
                    var newPositionOpacity = myTransitionable.get();
                    myPosition.setY(newPositionOpacity[0]);
                    myDOMElement.setProperty('opacity', newPositionOpacity[1]);

                    if (myTransitionable.isActive()) {
                        myNode.requestUpdate(myUpdateId);
                    }
                    else {
                        myNode.dismount();
                    }
                }
            });


            $rootScope.$on('messageComposed', function () {
                $rootScope.speechBubble = $rootScope.message;
                $rootScope.message = 'Start typing';
                $rootScope.$digest();

                myTransitionable.set([
                    endingPosition[1], // Y
                    1],                // Opacity 
                    { duration: '1000' });

                myDOMElement.setContent($rootScope.speechBubble);

                console.log(myNode);
                if (!myNode._mounted) {
                    myNode.mount('body/0');
                }
                myNode.requestUpdate(myUpdateId);
            });

        }
    };

    return directiveDefinitionObject;
}]);
