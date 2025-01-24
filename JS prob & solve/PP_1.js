/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
var taka = 51;
if (taka > 500) {
    console.log("free coke")
}
else {
    console.log("coke = 30tk")
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
var num1 = 30;
var num2 = 20;
var result;
num1 > num2 ? result = num1 * 2 : result = num1+num2;
console.log(result);