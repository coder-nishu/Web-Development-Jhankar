//var : no reason to use
//let : allow to reuse
//const: one time assign
const num = [2,4,6,4,8]
// num = [56789,12132] cant reassign new list 
function print(value) {
    console.log(value);
}
num[1] = 15
print(num)

function add(num1 = 0,num2 =0,num3 = 0)
{
    return num1+num2+num3;
}
const sum = add(1,2);
print("The sum is:"  + sum)
// console.log("The sum is: " + sum)

const a = 5;
const b = 12;

const math = `the sum of ${a} and ${b} is ${a+b}`;
print(math)

//function expression
const add2 = function(a,b){
    return a+b;
}
//arrow function
const add3 = (a,b) => a+b; //same as above function

const sum1 = add3i(4,2);
print(sum1)