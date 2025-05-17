class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}

const kodom = new person("Kodom Ali", 20);
console.log(kodom.name);
kodom.sleep();

const user = {
    name: "Nirob Ali",
    age: 20,
    // address: {
    //     city: "Dhaka",
    //     country: "Bangladesh"
    // }
}
console.log(user.address?.city);
// console.log(user["address"]["country"]);