function print(x){
    console.log(x)
}
const nums = [12,1,4,56,7,8,9];
//process -1
for(var i = 0;i<nums.length;i++){
    // print(nums[i])
}
//process -2
for(const val of nums){
    // print(val)
} 


const glass = {
    name : "glass",
    color : "red",
    price: 100,
    isClean: true
};

for(const i in glass){
    print(i)
}