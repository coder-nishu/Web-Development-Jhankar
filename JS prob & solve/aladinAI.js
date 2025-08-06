// const nums = [1,2,3,4,5,6,7,8,9,10];

// const multhree = nums.map((num) => num*3);
// console.log(multhree);

// //fibonacci series recursion
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// const fib10 = fibonacci(10);
// console.log(`Fibonacci of 10 is ${fib10}`);

// matrix transpose 2d
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// const transpose = [];
// // console.log(matrix[0][0]);
// for(let i=0;i<matrix.length;i++){
//     let temp = []
//     for(let j=0;j<matrix[i].length;j++){
//         temp.push(matrix[j][i])
//     }
//     transpose.push(temp);
// }
// console.log(transpose)

//strings
const name = "Abid Khan Nishat"
// const nameSplit = name.split("").reverse().join("");
// console.log(nameSplit);

function countVowel(sentence) {
    const vowel = "aeiouAEIOU"
    let countV = 0;
    let countC = 0;
    for (let char of sentence) {
        if (vowel.includes(char)) {
            countV++;
        }else if(char !== " "){
            countC++
        }
    }
    return `vowel is ${countV} and consonant is ${countC}`;
}
console.log(countVowel(name));