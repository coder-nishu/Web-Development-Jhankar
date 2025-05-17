function print(x){
    console.log(x)
}
//arrow func with 3 para,return the multiply
var multiply = (a=1,b=1,c=1) => a*b*c;
print(multiply(3,4))

const text = 
`I am a web developer.
i Love code.
i love biriany.`;
print(text)

//problem 2
const fr_names = ['limon','nishat','asif','tanjil','sadia'];
const even_names = [];
const odd_names = [];
for(const name of fr_names)
{
    if(name.length % 2 == 0)
    {
        even_names.push(name);
    }
    else{
        odd_names.push(name);
        }

}
print(even_names)
print(odd_names)

//problem 3
const arr1 = [1,2,3,4,5,6,7,8,9];
const arr2 = [10,11,12,13,14,15,16,17,18];
const mixArr = [...arr1,...arr2];
const max = Math.max(...mixArr); //find max value from mixArr
print(mixArr)
print(max)