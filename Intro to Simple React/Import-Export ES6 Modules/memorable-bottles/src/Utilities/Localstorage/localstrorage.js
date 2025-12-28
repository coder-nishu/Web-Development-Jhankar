const getcartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}
const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}
const addItemToCartLocalStorage = id => {
    const cart = getcartFromLocalStorage();
    const newCart = [...cart,id];
    saveCartToLocalStorage(newCart);
}
const removeFromLocalStorage = (id) => {
    const storedCart = getcartFromLocalStorage();
    const remainingCartIds = storedCart.filter(itemId => itemId !== id)
    saveCartToLocalStorage(remainingCartIds)
}

export {
    getcartFromLocalStorage as getStoreCart,
    addItemToCartLocalStorage as addTostoredCart,
    removeFromLocalStorage 
}