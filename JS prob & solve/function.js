//function structure
function print(){
    console.log("fan off kor");
}
print();
//return all even numbers of an array function
function retArray(arr){
    const newArr = [];
    for(const i of arr){
        if(i%2 === 0){
            newArr.push(i);
        }
    }
    return newArr;
}
const arr = [12,21,33,44,56,65,71,82,93];
console.log(retArray(arr));