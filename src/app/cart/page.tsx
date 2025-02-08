'use client'
import { useEffect, useState } from "react";
import { getCartItems, removeCart, updateCart } from "../action/action";
import { Product } from "../../../types/products";
import Swal from "sweetalert2";
import { AiFillDelete } from "react-icons/ai";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { urlFor } from "@/sanity/lib/image";
import Profooter from "@/components/profooter";
import { useRouter } from "next/navigation";


export default function Cart() {

  const [cartItem,setCartItem] = useState<Product[]>([]);

  useEffect(() => {
    setCartItem (getCartItems());
  },[])
  
  //remove item from cart
  const handleRemove = (id : string) => {
    Swal.fire(
      {
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }
    ).then((result) => {
      if(result.isConfirmed){
        removeCart(id)
        setCartItem(getCartItems());
        Swal.fire( 'Deleted!', 'Your item has been deleted.', 'success')
      }
    }
    )
  }
  
  //handle quantity of product
  const handleQuantity = (id : string, quantity:number) => {
    updateCart(id,quantity);
    setCartItem(getCartItems());
  }
  
  //increase quantity of product
  const handleIncrease = (id:string) => {
    const product = cartItem.find(item => item._id === id);
    if(product){
      handleQuantity(id,product.quantity + 1);
    }
  }

  //decrease quantity of product
  const handleDecrease = (id:string) => {
    const product = cartItem.find(item => item._id === id);
    if(product){
      handleQuantity(id,product.quantity - 1);
    }
  }

  //total cart price
  const totalCartPrice = () => {
    return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  //proceed to checkout
  const router = useRouter();
  const handleProceed =() => {
    Swal.fire({
      title: 'Proceed to checkout?',
      text: 'You will be redirected to checkout page',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed!'
    }).then((result) => {
      if(result.isConfirmed){
        Swal.fire('Proceeding to checkout', 'You will be redirected to checkout page', 'success');
      }
      router.push('/checkout');
      setCartItem([]);
    })
  }

  return (
      <div>
         <div className="relative">
         
                 <Image src={'/contact/Rectangle 1.png'} alt="picture" width={1440} height={316} className="w-full h-auto"/>
         
                 <div className="absolute top-[1%] sm:top-[5%] md:top-[10%] lg:top-[30%] left-[46%] flex text-center justify-center flex-col items-center ">
         
                   <Image src={'/navbar-img/logo.png'} alt="logo" width={77} height={77} className="w-[50px]"/>
         
                   <h2 className="font-medium text-2xl sm:text-4xl md:text-text-5xl">Cart</h2>
                   <div className="flex items-center space-x-2 ">
                     <h3 className="font-medium text-sm sm:text-base">Home</h3>
                     <IoIosArrowForward className="text-lg"/>
                     <h3 className="font-light text-sm sm:text-base">Cart</h3>
                   </div>
                 </div>
         
               </div> 
         
          <div>
              {cartItem.length > 0 ? (
                  <div className="flex items-center justify-between p-8">
                    
                      <table className="w-2/3">
                          <thead className="bg-bgpink ">
                              <tr className="text-base font-medium">
                                  <th>Product</th>
                                  <th>Price</th>
                                  <th>Quantity</th>
                                  <th>Subtotal</th>
                              </tr>
                          </thead>
                          <tbody>
                              {cartItem.map((item) => (
                                  <tr key={item._id}>
                                      <td className="flex items-center">
                                          {item.productImage && (
                                          <Image src={urlFor(item.productImage).url()} alt="product image" className="w-20 h-20 rounded" width={100} height={100}/>)}
                                          <span className="text-base text-footer font-normal">{item.title}</span>
                                      </td>   
                                      <td className="text-footer font-normal text-base">${item.price}</td>
                                      <td>
                                          <button onClick={() => handleDecrease(item._id)}>-</button>
                                          {item.quantity}
                                          <button onClick={() => handleIncrease(item._id)}>+</button>
                                      </td>
                                      <td className="font-normal text-base">{item.price * item.quantity}</td>
                                      <td>
                                          <button onClick={() => handleRemove(item._id)} className="text-button"><AiFillDelete/></button>
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                      
                      <div className="bg-bgpink w-1/3 p-4">
                          <h2 className="text-3xl font-semibold text-center ">Cart Totals</h2>
                          <h3 className="font-medium text-base ">Subtotal <span className="text-base font-normal text-footer"> {totalCartPrice()}</span></h3>
                          <h3 className="font-medium text-base">Total  <span className="text-button font-medium text-xl ">{totalCartPrice()}</span></h3>
                          <button onClick={handleProceed} className="text-xl  font-normal border border-black rounded-2xl px-12 py-2 mb-4">Check out</button>
                      </div>
                  </div>
              ) : (
                  <div>
                      <h3>No items in cart</h3>
                  </div>
              )}
          </div>
          <Profooter/>
      </div>
   );
}