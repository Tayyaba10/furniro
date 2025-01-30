import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";


export default function Checkout() {
  return (
    <div>
          <div className="relative">

               <Image src={'/contact/Rectangle 1.png'} alt="Picture of the author" width={1440} height={316}/>

              <div className="absolute top-[1%] sm:top-[5%] md:top-[10%] lg:top-[30%] left-[46%] flex justify-center flex-col items-center ">

                <Image src={'/navbar-img/logo.png'} alt="logo" width={77} height={77} className='w-[50px]'/>
                <h3 className="font-medium text-2xl sm:text-4xl md:text-5xl">Checkout</h3>
               
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-sm sm:text-base">Home</h3>
                  <IoIosArrowForward className='text-lg'/>
                  <h3 className="font-light text-sm sm:text-base">Checkout</h3>
                </div>

              </div>
            </div>

          <div className='flex justify-between flex-col lg:flex-row'>  
             {/* left side  */}
            <div className='ml-[20px] lg:ml-[80px] p-10'>

                 <form  className="flex gap-8 flex-col  ">
                    <h1 className='font-bold text-4xl'>Billing details</h1>

                    <div className='flex flex-col gap-8 sm:flex-row'>
                      <div className='flex flex-col w-full sm:w-[211px]'>
                        <label htmlFor="" className='font-semibold text-base mb-6'>First Name</label>
                        <input type="text" className='border border-footer rounded-[10px] w-[211px] h-[75px]' />
                      </div>
                      <div className='flex flex-col w-full sm:w-[211px]'>  
                        <label htmlFor="" className='font-semibold text-base mb-6'>Last Name</label>
                        <input type="text" className='border border-footer rounded-[10px] w-[211px] h-[75px]' />
                     </div>
                    </div>

                    <label htmlFor=""  className='font-semibold text-base'>Company Name (Optional)</label>
                    <input type="text" className='border border-footer rounded-[10px] w-full lg:w-[453px] h-[75px]' />

                    
                    <label htmlFor=""  className='font-semibold text-base'>Country / Region</label>
                    <div className='relative flex items-center justify-between'>
                    <input type="text" className='border border-footer rounded-[10px] w-full lg:w-[453px] h-[75px] p-8 ' placeholder='Sri Lanka'/>
                    <button className='absolute cursor-pointer right-4'>
                      <Image src={"/Vector.png"} alt='dropdown' width={14} height={8}/>
                    </button>
                    </div>

                    <label htmlFor=""  className='font-semibold text-base'>Street address</label>
                    <input type="text" className='border border-footer rounded-[10px] w-full lg:w-[453px] h-[75px]' />

                    <label htmlFor=""  className='font-semibold text-base'>Town / City</label>
                    <input type="text" className='border border-footer rounded-[10px] w-full lg:w-[453px] h-[75px]' />

                   
                    <label htmlFor=""  className='font-semibold text-base'>Province</label>
                    <div className='relative flex items-center justify-between'>
                    <input type="text" className='border border-footer rounded-[10px] w-full lg:w-[453px] h-[75px] p-8 ' placeholder='Western Province'/>
                    <button className='absolute cursor-pointer right-4'>
                      <Image src={"/Vector.png"} alt='dropdown' width={14} height={8}/>
                    </button>
                    </div>

                    <label htmlFor=""  className='font-semibold text-base'>ZIP code</label>
                    <input type="text" className='border border-footer rounded-[10px] w-full lg:w-[453px] h-[75px]' />
                    <label htmlFor=""  className='font-semibold text-base'>Phone</label>

                    <input type="text" className='border border-footer rounded-[10px] w-full lg:w-[453px] h-[75px]' />
                    <label htmlFor=""  className='font-semibold text-base'>Email address</label>
                    
                    <input type="text" className='border border-footer rounded-[10px] w-full lg:w-[453px] h-[75px]' />
                    <label></label>
                    <input type="text" className='border border-footer rounded-[10px] w-full lg:w-[453px] h-[75px] p-8' placeholder='Additional information'/>
                    
                    
                 </form>
            </div>
            {/* right side */}
            <div className='w-full lg:w-[608px] mt-28 ml-6'>

              <div className='w-full lg:w-[533px] border-b-2'>
                <div className='flex justify-between'>
                  <div className='flex flex-col gap-5'>
                     <h1 className='font-medium text-2xl'>Product</h1>
                     <div className='flex items-center gap-3'> 
                     <p className='font-normal text-base text-footer'>Asgaard sofa</p>
                     <p className='font-medium text-xs'>x</p>
                     <p className='font-medium text-xs'>1</p>
                     </div>
                    <p className='font-normal text-base'>Subtotal</p>
                    <p className='font-normal text-base mb-8'>Total</p>
                  </div>   
                  <div className='flex flex-col gap-5 items-end'>
                    <h1 className='font-medium text-2xl'>Subtotal</h1>
                    <p className='font-light text-base'>Rs. 250,000.00</p>
                    <p className='font-light text-base'>Rs. 250,000.00</p>
                    <p className='font-bold text-2xl text-button'>Rs. 250,000.00</p>
                  </div>
                </div>
              </div> 

              <div className='mt-16 w-full lg:w-[533px] '>
                
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-[14px] h-[14px] rounded-full bg-black' ></div>
                    <h2 className='font-normal text-base'>Direct Bank Transfer</h2>
                  </div>  
                    
                    <p className=' text-footer text-base font-light text-justify mb-4'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    
                    <div className='flex items-center gap-4 mb-3'>
                      <div className='w-[14px] h-[14px] rounded-full bg-white border-[1px] border-footer'></div>
                      <p className='text-footer font-medium text-base'>Direct Bank Transfer</p>
                    </div>

                    <div className='flex items-center gap-4 mb-4'>
                      <div className='w-[14px] h-[14px] rounded-full bg-white border-[1px] border-footer'></div>
                      <p className='text-footer font-medium text-base'>Cash On Delivery</p>
                    </div>

                    <p className='font-light text-base mb-8 text-justify'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold text-base'>privacy policy.</span> </p>
                    <div className='flex justify-center'>
                    <button className='w-full lg:w-[318px] h-[64px] font-normal text-xl border-[1px] border-black rounded-xl'>Place order</button>
                    </div>
              </div>

            </div>    
          </div>      
            {/* bottom section  */}
             <div className=" mt-12 py-12 px-4 bg-[#FAF3EA]">
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto'>   
                    <div className="flex items-center space-x-4">
                
                    <Image src="/contact/trophy 1.png" width={60} height={60} alt="trophy" />
                     <div>
                      <h4 className="font-semibold text-[25px]">High Quality</h4>
                      <p className="font-medium text-lg text-cardtext">crafted from top materials</p>
                     </div>
                    </div>
            
                    <div className="flex items-center space-x-4">
                    <Image src="/contact/guarantee.png" width={60} height={60} alt="wwarranty" />
                      <div>
                      <h4 className="font-semibold text-[25px]">Warranty Protection</h4>
                      <p className="font-medium text-lg text-cardtext">Over 2 years</p>
                      </div>
                    </div>
            
                    <div className="flex items-center space-x-4">
                    <Image src="/contact/shipping.png" width={60} height={60} alt="shipping" />
                      <div>
                      <h4 className="font-semibold text-[25px]">Free Shipping</h4>
                      <p className="font-medium text-lg text-cardtext">Order over 150 $</p>
                      </div>
                    </div>
            
                    <div className="flex items-center space-x-4">
                    <Image src="/contact/Vector (2).png" width={60} height={60} alt="support" />
                      <div>
                      <h4 className="font-semibold text-[25px]">24 / 7 Support</h4>
                      <p className="font-medium text-lg text-cardtext">Dedicated support</p>
                      </div>
                    </div>
                  </div>
            </div>
    </div>
  )
}
