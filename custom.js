
// this is using a custom methode

const { myPerformance } = require("perf_hooks");

let thisArray = Array.from({length: 2000000}, (_, i) => i);
let thisTarget = 18889;

let secondStartime = performance.now();
let secondFound = false
function myCustomIncludes(arr, target) { 
    for (let i = 0; i< arr.length; i++){
        if(arr[i]=== target){
            secondFound = true;
            return true;
        }
    }
    return false;
} 
let SecondEndTime = performance.now();

console.log(myCustomIncludes(thisArray, thisTarget));
console.log(thisArray.indexOf(thisTarget));
console.log(`Time taken for custom method: ${(SecondEndTime - secondStartime).toFixed(4)} ms`);