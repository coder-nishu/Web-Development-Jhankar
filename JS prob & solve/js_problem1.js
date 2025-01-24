//convertion
function inchtofeet(inch) {
    const feet = inch / 12;
    return feet;
}
const tonnyheight = 4;
console.log(inchtofeet(tonnyheight))
//avg of odd numbers in array
function avgOfOdd(arr) {
    let sum = 0;
    let count = 0;
    for (const i of arr) {
        if (i % 2 != 0) {
            sum += i;
            count++;
        }
    }
    return sum/count;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(avgOfOdd(arr));


//max numbers in a array
const height = [65,66,68,72,78,60,69,12,2,4]
function getMax(arr){
    let maxVal;
    for(const ele of arr){
        maxVal = ele;
        for(let k = 0;k<arr.length;k++){
            if(maxVal <= arr[k]){
                maxVal = arr[k]
            }
        }
    }
    console.log(maxVal)
}
getMax(height)

//products price calculation from object array
const products =[
    {name: 'shampoo',price: 300, quantity: 2},
    {name: 'chiruni',price: 100, quantity: 3},
    {name: 'shirt',price: 700, quantity: 5},
    {name: 'pant',price: 1200, quantity: 1}
]

function cartPrice (products){
    let totalprice = 0;
    for(const product of products){
        const tempPrice = product.price * product.quantity;
        totalprice += tempPrice;
    }
    console.log("Price of all products:", totalprice)
}
cartPrice(products)