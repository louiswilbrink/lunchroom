var Famous = require('famous');
var FamousEngine = Famous.core.FamousEngine;
var Transitionable = Famous.transitions.Transitionable;

// Create Famous Engine clock reference.
var clock = FamousEngine.getClock();

// Create a transitionable with an initial value of 0.
var myTransitionable = new Transitionable(0);

// Transition this value to 100 over 1 second.
myTransitionable.set(1000, { duration: 1000 });

clock.setTimeout(function () {
    console.log(myTransitionable.get());
}, 500);

FamousEngine.init();
