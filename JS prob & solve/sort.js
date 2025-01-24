const num = [4,6,3,9,1,2,8,5,12]
const num_sort = num.sort() //not working properly bcz its compare alphabetically using ascii
const num_asc = [...num].sort(function (a,b) {return a-b})
const num_desc = [...num].sort(function (a,b) {return b-a})
console.log(num_sort)
console.log(num_asc)
console.log(num_desc)