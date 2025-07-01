// working on quadratic time complexity

// let arr = [1,2,3,4,5,6,7,8,9]
// function printp (){
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0 ; j < arr.length ; j++){
//             console.log(arr[i], arr[j]);
//         }
//     }
// }
// printp();

// 1. Reverse a string using a loop
// 2. Check for palindrome using string reversal

let str = ".....";

function cleanString(myString){
    return myString.toLowerCase().replace(/[^a-z0-9]/g, "");

}
function reverseString(myString) {
    let reversed = "";
    for (let i = myString.length - 1; i >= 0; i--) {
        reversed += myString[i];
    }
    return reversed;
}

function isPalindrome(myString) {
    let cleaned= cleanString(myString)
    let reversed = reverseString(cleaned);
    return cleaned === reversed;
}       

console.log(reverseString(str)); 
console.log(isPalindrome(str)); 


