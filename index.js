// 1. calculateDifference function
function calculateDifference(a, b) {
    return a - b;
}

// 2. isOdd function
function isOdd(num) {
    return num % 2 !== 0;
}

// 3. findMin function
function findMin(arr) {
    return Math.min(...arr);
}

// 4. filterEvenNumbers function
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5. sortArrayDescending function
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

// 6. lowercaseFirstLetter function
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str[0].toLowerCase() + str.slice(1);
}

// 7. countVowels function
function countVowels(str) {
    const vowels = 'a,e,i,o,u,A,E,I,O,U';
    return [...str].filter(char => vowels.includes(char)).length;
}

// 8. findAverage function
function findAverage(arr) {
    const total = arr.reduce((sum, num) => sum + num, 0);
    return total / arr.length;
}

// Testing the functions
console.log(calculateDifference(10, 5));
console.log(isOdd(3)); // true
console.log(findMin([5, 3, 9, 1])); 
console.log(filterEvenNumbers([1, 2, 3, 4]));
console.log(sortArrayDescending([1, 4, 3, 2]));
console.log(lowercaseFirstLetter('Hello')); 
console.log(countVowels('open'));
console.log(findAverage([1, 2, 3, 4]));
