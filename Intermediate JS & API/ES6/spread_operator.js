const max = Math.max(5,7,3,9,1,2,8)
const num = [ 17,12,16,23,53,36]
const arrayMax = Math.max(...num)
console.log(num)
console.log(...num) //spread operator
console.log(max)
console.log(arrayMax)

// use spread operator to copy
const original = [1,2,3,4,5]
const clone = original
clone.push(12)
console.log(clone)
console.log(original) //change in both list so have to use spread operator

const friends = [9,8,7,6,5]
const bondhu = [...original]
bondhu.push(69)
console.log(friends)
console.log(bondhu)