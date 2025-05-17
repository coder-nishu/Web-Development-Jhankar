const odd_array = [1,3,5,7,9]
const even_arr = odd_array.map(n => n+1)
console.log(even_arr);

const filt_arr = [33,50,79,90,101,30]
console.log(filt_arr.filter(n => n%10 === 0))


const instructor = [
    {name: "nodi",age:20,position : "senior"},
    {name: "sadia",age:15,position : "junior"},
    {name: "arif",age:22,position : "senior"},
]
console.log(instructor.filter(n => n.position === "senior").map(n => n.name))

console.log(instructor.map(n => n.age).reduce((a,b) => a+b)) 