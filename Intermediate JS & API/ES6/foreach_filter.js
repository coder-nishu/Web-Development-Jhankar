const numbers =[1, 2, 3, 4, 5,6,7,8,9,10];
// numbers.forEach((number) => {console.log(number*2)});
const filterNumbers = numbers.filter(n => n%2 === 0);  
console.log(filterNumbers);

//find
const findNumber = numbers.find(n => n%2 === 0);
console.log(findNumber);