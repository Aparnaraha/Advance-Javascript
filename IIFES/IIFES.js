/* 

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog.


---------------Syntax-----------------
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();


--> It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

--> The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

--> The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

*/


// Immediately Invoked Function Expressions (IIFE)


(function chai(){
  // named IIFE
  console.log(`DB CONNECTED`);
})();

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')