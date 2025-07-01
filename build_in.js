
// 3. Write an algorithm that searches for a particular item in an array using any built-in method, and a custom method.

// Then measure the time it takes for both implementations to execute.


// this is using a  build in methode
const {performance} = require("perf_hooks");

let myArray = Array.from({length: 2000000} , (_, i) => i);
let target = 18889;

let startTime = performance.now();
let found  = myArray.includes(target);

let endTime = performance.now();



console.log(myArray.indexOf(target));

console.log(` Time taken: ${(endTime - startTime).toFixed(4)} ms`);



