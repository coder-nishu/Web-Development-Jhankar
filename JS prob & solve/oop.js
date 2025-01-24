//object
const bottle ={
    brand: 'rfl',
    price: 45,
    color: 'white',
    isClean: true,
    'quantity per ml' : '1000ml'
}
//3way to declare
console.log(bottle.color)
console.log(bottle['quantity per ml'])
const botPrice = 'price'
console.log(bottle[botPrice])

//to see all keys
const keys = Object.keys(bottle)
console.log(keys)

//to see all value
const value = Object.values(bottle)
console.log(value)

//loop in a class (for of: array | for in: object)
for(const prop in bottle){
    console.log(prop,":", bottle[prop], " | ", "Type:", typeof(bottle[prop]));
}

