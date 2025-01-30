import Image from "next/image";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
  return (
  
    <div>
      <div className="relative">

        <Image src={'/contact/Rectangle 1.png'} alt="Picture of the author" width={1440} height={316} className="w-full h-auto"/>

        <div className="absolute top-[1%] sm:top-[5%] md:top-[10%] lg:top-[30%] left-[46%] flex justify-center flex-col items-center ">

          <Image src={'/navbar-img/logo.png'} alt="logo" width={77} height={77} className="w-[50px]"/>
          <h3 className="font-medium text-2xl sm:text-4xl md:text-5xl">Cart</h3>

          <div className="flex items-center space-x-2">
            <h3 className="font-medium text-sm sm:text-base">Home</h3>
            <IoIosArrowForward className="text-lg"/>
            <h3 className="font-light text-sm sm:text-base">cart</h3>
          </div>

        </div>
       
      </div>

      <div className="">
        <div className="flex justify-around items-center p-4 lg:w-[817px] h-[55px] bg-[#F9F1E7] ml-20 mt-10">
          <h2 className="font-semibold text-base ">Product</h2>
          <h2 className="font-semibold text-base ">Price</h2>
          <h2 className="font-semibold text-base ">Quantity</h2>
          <h2 className="font-semibold text-base ">Subtotal</h2>
        </div> 
               
        <div className="flex flex-col gap-4 lg:flex-row justify-between lg:items-start p-4">  
             
             
          <div className="flex items-center justify-evenly gap-8 ">

            <Image src="/Asgaard sofa 3.png" width={111} height={90} alt="sofa image" className="bg-[#F9F1E7]"/>
            <p className="font-normal text-base text-footer w-[50%] sm:w-full lg:w-auto">Asgaard sofa</p>
            <p className="font-normal text-base text-footer w-[50%] sm:w-full lg:w-auto">Rs. 250,000.00</p>
            <input type="text" placeholder="1" className="border-[1px] border-footer w-[32px] h-[32px] sm:w-[50px] lg:w-[32px] "/>
            <p className="font-normal text-base w-[50%] sm:w-full lg:w-auto">Rs. 250,000.00</p>
            <Image src={'/cart/delete.png'} alt="icon" width={21} height={21}/>
          
          </div>

          <div className="bg-[#F9F1E7] text-center w-full lg:w-[24rem] p-4">

           <h2 className="font-semibold text-[32px] ">Cart Totals</h2>
           <p className="font-normal text-base text-footer p-8">
            <span className="font-medium text-base text-black mr-10 ">Subtotal </span>  Rs. 250,000.00</p>
           <p className="font-medium text-[20px] text-button ">
            <span className="font-medium text-base text-black mr-10">Total</span> Rs. 250,000.00</p>

           <button className="mt-16 rounded-xl w-full lg:w-[222px] font-normal text-[20px] border-gray-900 border-2 p-2 pr-3 pl-3"><Link href="/checkout">Check Out</Link></button>
        
          </div>

        </div>
      </div>

      

      <div className=" mt-12 py-12 px-4 bg-[#FAF3EA]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
        <div className="flex items-center space-x-4">
        <Image src="/contact/trophy 1.png" width={60} height={60} alt="trophy" />
         <div>
          <h4 className="font-semibold text-[20px] sm:text-[25px]">High Quality</h4>
          <p className="font-medium text-lg text-cardtext">crafted from top materials</p>
         </div>
        </div>

        <div className="flex items-center space-x-4">
        <Image src="/contact/guarantee.png" width={60} height={60} alt="warranty" />
          <div>
          <h4 className="font-semibold text-[20px] sm:text-[25px]">Warranty Protection</h4>
          <p className="font-medium text-lg text-cardtext">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
        <Image src="/contact/shipping.png" width={60} height={60} alt="shipping" />
          <div>
          <h4 className="font-semibold text-[20px] sm:text-[25px]">Free Shipping</h4>
          <p className="font-medium text-lg text-cardtext">Order over 150 $</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
        <Image src="/contact/Vector (2).png" width={60} height={60} alt="support" />
          <div>
          <h4 className="font-semibold text-[20px] sm:text-[25px]">24 / 7 Support</h4>
          <p className="font-medium text-lg text-cardtext">Dedicated support</p>
          </div>
        </div>
      </div>
      </div>
   </div>

  );
}