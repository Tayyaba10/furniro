import { Product } from "../../../types/products";

//add item to cart
export const addCart = (product : Product) =>{
    const cart :Product[]= JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProductIndex = cart.findIndex(item => item._id === product._id);

    if(existingProductIndex > -1){
        cart[existingProductIndex].quantity += 1;
}
else(
    cart.push({...product,quantity:1})
)
localStorage.setItem('cart',JSON.stringify(cart));
} 

//remove item from cart
export const removeCart = (productId : string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem("cart",JSON.stringify(cart));
}

//update cart
export const updateCart = (productId : string , Quantity:number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex(item => item._id == productId)
    
    if(productIndex > -1 ){
        cart[productIndex].quantity = Quantity;
        localStorage.setItem('cart',JSON.stringify(cart))
    }
}

//get cart items
export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}