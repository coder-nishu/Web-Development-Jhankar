class products{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    getQuantity(){
        return this.quantity;
    }
    setName(name){
        this.name = name;
    }
    setPrice(price){
        this.price = price;
    }
    setQuantity(quantity){
        this.quantity = quantity;
    }
}

const lenovo = new products("Lenovo", 500, 10);
const dell = new products("Dell", 600, 5);


const names = [lenovo.getName(), dell.getName()];
const prices = [lenovo.getPrice(), dell.getPrice()];
const quantities = [lenovo.getQuantity(), dell.getQuantity()];

console.log(names);
console.log(prices);
console.log(quantities);