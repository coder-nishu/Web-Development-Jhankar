//prob 1
function calculateMoney(ticket) {
    if (ticket >= 0) {
        const profitperday = (120 * ticket) - 900;
        return profitperday
    }
    else {
        return 'invalid number';
    }
}
function checkName(str) {
    if (typeof str !== 'string') {
        return 'Invalid'
    }
    else {
        const len = (str.length) - 1;
        const lowercase = str[len].toLowerCase()
        const arr = ['a', 'y', 'i', 'e', 'o', 'u', 'w']
        if (arr.includes(lowercase) === true) {
            return 'Good Name'
        }
        else {
            return 'Bad Name'
        }
    }
}

function deleteInvalids(array) {
    const fixed_arr = []
    if (Array.isArray(array) !== true) {
        return 'Invalid Array'
    }
    for (const i of array) {
        if (typeof i === 'number' && Number.isNaN(i) !== true) {
            fixed_arr.push(i)
        }
    }
    return fixed_arr;
}
// const arr1 = { num: [1, 2, 3] };
// console.log(deleteInvalids(arr1))

function password(obj) {
    if ((Object.keys(obj)).length !== 3 || ((obj.birthYear).toString()).length !== 4) {
        return 'invalid';
    }
    else {
        const frst = (obj.siteName).charAt(0).toUpperCase() + (obj.siteName).slice(1).toLowerCase();
        const pass = frst + '#' + obj.name + '@' + (obj.birthYear).toString()
        return pass
    }

}
/*function signature/sample */
function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) !== true && livingCost !== 'number'){
        return 'invalid input'
    }
    else{
        let tax = 0;
        let sum = 0;
        for(const i of arr){
            if(i >= 3000){
                const temp = i*0.2;
                tax += temp;
            }
            sum += i;
        }
        const saving = sum - tax - livingCost;
        if (saving >= 0)
            return saving
        else{
            return 'earn more'
        }
    }
}
console.log(monthlySavings(100, [ 900 , 2700 , 3400] ))