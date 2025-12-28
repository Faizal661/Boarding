// Higher-Order Function: 
//      A function that takes another function as an argument or returns one.
// Callback Function: 
//      A function passed into another function to be executed later. 


function processUserInput(callback) {
  const name = "User";
  callback(name);
}

processUserInput((name) => console.log(`Hello ${name}`));
