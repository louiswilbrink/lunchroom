'use strict'

angular.module('lunchRoom')
    .directive('speechBubble', ['$rootScope', function ($rootScope) {
    
    var directiveDefinitionObject = {
        template: '<div>{{ speechBubble }}</div>',
        restrict: 'E',
        replace: true,
        controller: function () {

            $rootScope.$on('messageComposed', function () {
                $rootScope.speechBubble = $rootScope.message;
                $rootScope.message = 'Start typing';
                $rootScope.$digest();

            var scene = FamousEngine.createScene();

var myNode = scene.addChild();
var mySize = new Size(myNode)
        .setMode('absolute', 'absolute', 'absolute')
        .setAbsolute(150, 150);
var myDOMElement = new DOMElement(myNode)
        .setProperty('background-color', 'lightblue')
        .setContent('Famous!');
var myPosition = new Position(myNode)
        .set(100, 150, 0);

var myTransitionable = new Transitionable(100);

var myUpdateId = myNode.addComponent({
    onUpdate: function (time) {
        var newPosition = myTransitionable.get();
        console.log(newPosition);
        myNode.setPosition(newPosition, 150, 0);

        if (myTransitionable.isActive()) {
              myNode.requestUpdate(myUpdateId);
        }
    }
});

FamousEngine.init();

myTransitionable.set(500, { duration: '1000' });

myNode.requestUpdate(myUpdateId);
            });

        }
    };

    return directiveDefinitionObject;
}]);
