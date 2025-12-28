// A closure is a function combined with references to its surrounding state, also known as its 
// lexical environment. In simpler terms, a closure allows a function to access its outer 
// function's scope, even after the outer function has finished executing. This enables the 
// inner function to "remember" and access variables from the environment in which it was created. 

// Data privacy and encapsulation: Creating private variables and methods that are not directly 
// accessible from the outside. This is often called the "Module pattern."
// Function factories: Functions that create and return other, specialized functions. This is a 
// core part of functional programming.
// Currying and partial application: Transforming a function that takes multiple arguments into 
// a sequence of functions, each taking a single argument.
// Event handlers and callbacks: Capturing local variables for use in asynchronous operations 
// like setTimeout, fetch, and event listeners.
// Maintaining state: For tasks like creating unique IDs or implementing counters that persist 
// across multiple function calls. 


function outerFunction() {
  var count = 0;

  function innerFunction() {
    count++;
    console.log("Count:", count);
  }

  return innerFunction;
}


const myFunction = outerFunction();

myFunction(); // Output: Count: 1
myFunction(); // Output: Count: 2
myFunction(); // Output: Count: 3





// Common closure pitfall in loops (with var)
// A classic example of unexpected behavior with closures happens inside loops that use the var keyword. 

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // This will log "5" five times
  }, 1000);
}

// This occurs because var has function scope, and the i variable is shared across all iterations of the loop. The setTimeout callbacks all close over the same i, and by the time they execute, the loop has already completed, and i has a final value of 5. 
// The fix with let
// The introduction of let and const in ES6 created block-scoped variables, which solve this problem naturally. 

for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // This will correctly log 0, 1, 2, 3, 4
  }, 1000);
}

// Here, a new i is created for each iteration of the loop, and the setTimeout callback closes over that unique, per-iteration i. 