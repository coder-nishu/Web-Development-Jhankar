//exception handle using js
function multiply(a, b) {
    if (typeof a !== typeof b || (typeof a & typeof b) !== 'number') {
        return "please provide number"
    }
    else {
        const mult = a * b;
        return mult;
    }

}
const result = multiply(5, 'seven')
console.log(result)

//array is a object in js..
function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return 'please provide a array';
    }
    const sec = numbers[1];
    return sec;
}
const sec = getSecond(2)
console.log(sec);