//javascript all loop example
let fruits = ['apple',"orange",'banana','jambura'];
for(const num of fruits){
    console.log(num)
}
let num = 0;
while(num < 5){
    console.log('hello'+ num);
    num += 1;
}
//for loop 
for(let i = 0;i<5;i++){
    console.log(i)
}
let n=10
do{
 console.log(n)
 n++;
}while(n<20)

 const reverse = []
for(const num of fruits){
    reverse.unshift(num);
}
console.log(reverse);