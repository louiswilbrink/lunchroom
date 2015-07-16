var Famous = require('famous');
var FamousEngine = Famous.core.FamousEngine;
var DOMElement = Famous.domRenderables.DOMElement;
var Size = Famous.components.Size;
var Position = Famous.components.Position;
var Transitionable = Famous.transitions.Transitionable;

var scene = FamousEngine.createScene();

var myNode = scene.addChild();

var myDOMElement = new DOMElement(myNode);

myDOMElement.setProperty('background-color', 'lightblue')
    .setContent('Famous!');

var mySize = new Size(myNode);

mySize.setMode('absolute', 'absolute', 'absolute')
    .setAbsolute(150, 150);

var myPosition = new Position(myNode);

myPosition.set(100, 50, 0);

var myTransitionable = new Transitionable(0);

myTransitionable.set(500, { duration: 1000 });

// Adding a component that allows this node to
// hook into the update loop of the scene.
var myUpdateId = myNode.addComponent({
    onUpdate: function (time) {
        // Set a new position based on the current value
        // of myTransitionable.
        myNode.setPosition(myTransitionable.get(), 150, 0);

        // Once myTransitionable has reached its final value,
        // it will no longer be active and this update process
        // can stop.  Otherwise, call it continuously.
        if (myTransitionable.isActive()) {
              myNode.requestUpdate(myUpdateId);
        }
    }
});

myNode.requestUpdate(myUpdateId);

FamousEngine.init();

var button = $('#button');

button.click(function () {
    console.log('hello');
});

console.log(button);

