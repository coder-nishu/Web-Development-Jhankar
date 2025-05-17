const actor = {
    name : 'ananta',
    age: 25,
    phone: '01919234516',
    money: 123455
}
// if right side is an object left side destructuring will be a object as well 
//use property name as a variable that contains the property

const {phone,age,money} = actor //collect phone number from actor

console.log(phone)
console.log(age)
console.log(money)

//Array Destructing
const nums = [1,2,3,4,5,6,7,8,9]
const [first,second] = nums; //frs
console.log(second)

//exmple 2
function doubleThem(a,b){
    return [a*2,b*2]
}

const [prothom,ditio] = doubleThem(15,20)
console.log(prothom)
console.log(ditio)
