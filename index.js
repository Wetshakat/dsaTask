// Given an array of numbers, find the most occurred number, and how many times it occurs.

// Example: [1, 2, 2, 4, 5, 2].
// Output:
// Number: 2
// Occurence: 3

let numbers = [1, 2, 2, 4, 5, 2];

function findMostOccurredNumber(arr) {
    let numbercount = {};
    let highestcount = 0;
    let highestoccurredNumber = null;

    for (let i = 0; i< arr.length; i++) {
        let number = arr[i];
        if (numbercount[number]) {
            numbercount[number]++;
        } else {
            numbercount[number] = 1;
        }

        if (numbercount[number] > highestcount) {
            highestcount = numbercount[number];
            highestoccurredNumber = number;
        }
    }
    return {
        number: highestoccurredNumber,
        occurrence: highestcount
    };
}
console.log(findMostOccurredNumber(numbers));