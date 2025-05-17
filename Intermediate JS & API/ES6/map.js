const num = [4,5,6,7,8,9,10];
// map method:do the loop through full array and do the function in whole array

function doubleItem(num){
    return num * 2;
}

// const doubleNum = num.map(doubleItem);
const doubleNum = num.map(n => n*2);
console.log(num);
console.log(doubleNum);

const name = ['limon','nishat','asif','tanjil','sadia'];
const nameLenth = name.map(n => n.length);
console.log(nameLenth); 