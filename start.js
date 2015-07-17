var Famous = require('famous');
var FamousEngine = Famous.core.FamousEngine;
var DOMElement = Famous.domRenderables.DOMElement;
var Size = Famous.components.Size;
var Position = Famous.components.Position;
var Transitionable = Famous.transitions.Transitionable;

window.Famous = Famous;
window.FamousEngine = Famous.core.FamousEngine;
window.DOMElement = Famous.domRenderables.DOMElement;
window.Size = Famous.components.Size;
window.Position = Famous.components.Position;
window.Transitionable = Famous.transitions.Transitionable;

//var scene = FamousEngine.createScene();

//var myNode = scene.addChild();
//var mySize = new Size(myNode)
        //.setMode('absolute', 'absolute', 'absolute')
        //.setAbsolute(150, 150);
//var myDOMElement = new DOMElement(myNode)
        //.setProperty('background-color', 'lightblue')
        //.setContent('Famous!');
//var myPosition = new Position(myNode)
        //.set(100, 150, 0);

//var myTransitionable = new Transitionable(100);

//var myUpdateId = myNode.addComponent({
    //onUpdate: function (time) {
        //var newPosition = myTransitionable.get();
        //console.log(newPosition);
        //myNode.setPosition(newPosition, 150, 0);

        //if (myTransitionable.isActive()) {
              //myNode.requestUpdate(myUpdateId);
        //}
    //}
//});

//FamousEngine.init();
