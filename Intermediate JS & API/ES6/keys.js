function print(x){
    console.log(x)
}

const glass = {
    name : "glass",
    color : "red",
    price: 100,
    isClean: true
};


print(Object.keys(glass))
print(Object.values(glass))

const pair = Object.entries(glass) //return 2d array in key pair
print(pair)

// remove object properties/value
delete glass.isClean //easy process
print(glass)


//delete another process
// const {isClean,...newGlass} = glass; //create new object
print(newGlass)


//freeze
Object.freeze(glass) //cant change/edit glass object properties

glass.source = "Bangladesh"
