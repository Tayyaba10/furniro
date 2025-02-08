'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import Profooter from '@/components/profooter';
import { Product } from '../../../types/products';
import { getCartItems } from '../action/action';
import Swal from 'sweetalert2';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';


export default function Checkout() {

  const [cartItem, setCartItem] = useState<Product[]>([])
  const [discount, setDiscount] = useState<number>(0)
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    countryRegion: '',
    streetAddress: '',
    townCity: '',
    province: '',
    zipCode: '',
    phone: '',
    emailAddress: '',
    additionalInfo: '',
  });

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    companyName: false,
    countryRegion: false,
    streetAddress: false,
    townCity: false,
    province: false,
    zipCode: false,
    phone: false,
    emailAddress: false,
    additionalInfo: false
  });

  useEffect(() => {
    setCartItem(getCartItems);
    const applyDiscount = localStorage.getItem('discount')
    if (applyDiscount) {
      setDiscount(Number(applyDiscount))
    }
  },[])

  const subTotal = cartItem.reduce(
    (total, item) => total + item.price * item.quantity, 0)
    
  const total = Math.round(subTotal - discount)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value
    })
  }
   const validateForm = () =>{
       const error = {
        firstName : !formValues.firstName,
        lastName : !formValues.lastName,
        companyName : !formValues.companyName,
        countryRegion : !formValues.countryRegion,
        streetAddress : !formValues.streetAddress,
        townCity : !formValues.townCity,
        province : !formValues.province,
        zipCode : !formValues.zipCode,
        phone : !formValues.phone,
        emailAddress : !formValues.emailAddress,
        additionalInfo : !formValues.additionalInfo
       };
       setError(error)
       return !Object.values(error).every((error) => error)
   }   
   const handleOrder = async () => {

    Swal.fire({
      title: 'Order Placed',
      text: 'Your order has been placed successfully',
      icon: 'success',
      confirmButtonText: 'Ok',
      showCancelButton: true,
      confirmButtonColor: '#000',
      cancelButtonColor: '#000',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        if(validateForm()){
          localStorage.removeItem('cart')
          Swal.fire('Order Placed', 'Your order has been placed successfully', 'success')
        } else {
          Swal.fire('Error', 'Please fill all the fields', 'error')
        } 
      }
    })

    const orderData = {
      _type: 'order',
      firstName : formValues.firstName,
      lastName : formValues.lastName,
      companyName : formValues.companyName,
      countryRegion : formValues.countryRegion,
      streetAddress : formValues.streetAddress,
      townCity : formValues.townCity,
      province : formValues.province,
      zipCode : formValues.zipCode,
      phone : formValues.phone,
      emailAddress : formValues.emailAddress,
      additionalInfo : formValues.additionalInfo,
      cartItem : cartItem.map(item => ({
        _type:"reference",
        _ref : item._id
      })),
      discount : discount,
      total : total,
      orderDate : new Date().toISOString
    };

    try {
      await client.create(orderData)
      localStorage.removeItem("discount")
    } catch (error) {
      console.log('order created error',error);
      
    }
   }

  return (
    <div>
          <div className="relative">

               <Image src={'/contact/Rectangle 1.png'} alt="Picture of the author" width={1440} height={316}/>

              <div className="absolute top-[1%] sm:top-[5%] md:top-[10%] lg:top-[30%] left-[46%] flex justify-center flex-col items-center ">

                <Image src={'/navbar-img/logo.png'} alt="logo" width={77} height={77} className='w-[50px]'/>
                <h3 className="font-medium text-2xl sm:text-4xl md:text-5xl">Checkout</h3>
               
                <div className="flex items-center space-x-2">
                  <Link href={'/'}>
                  <h3 className="font-medium text-sm sm:text-base">Home</h3>
                  </Link>
                  <IoIosArrowForward className='text-lg'/>
                  <Link href={'/checkout'}>
                  Checkout
                  </Link>
                </div>

              </div>
            </div>

          <div className='flex justify-between flex-col lg:flex-row '>  
             {/* left side  */}
            <div className='ml-[20px] lg:ml-[80px] p-10'>

                 <form  className="flex gap-8 flex-col  ">
                    <h1 className='font-bold text-4xl'>Billing details</h1>

                    <div className='flex flex-col gap-8 sm:flex-row'>
                      <div className='flex flex-col w-full sm:w-[211px]'>
                        <label htmlFor="" className='font-semibold text-base mb-6'>First Name</label>
                        <input type="text" id='firstName' value={formValues.firstName} onChange={handleInput} className='border border-footer p-2 rounded-[10px] w-[211px] h-[75px]' />
                         {error.firstName && (<p className='text-red-500'>First Name is required</p>)}
                      </div>
                      <div className='flex flex-col w-full sm:w-[211px]'>  
                        <label htmlFor="" className='font-semibold text-base mb-6'>Last Name</label>
                        <input type="text" id='lastName' value={formValues.lastName} onChange={handleInput} className='border border-footer p-2 rounded-[10px] w-[211px] h-[75px]' />
                        {error.lastName && (<p className='text-red-500'>Last Name is required</p>)}
                     </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                      <label htmlFor="" className='font-semibold text-base'>Company Name (Optional)</label>
                      <input type="text" id='companyName' value={formValues.companyName} onChange={handleInput} className='border border-footer p-2 rounded-[10px] w-full lg:w-[453px] h-[75px]' />
                       {error.companyName && (<p className='text-red-500'>Company Name is required</p>)}
                    </div>  

                   <div className='flex flex-col gap-8'>
                    <label htmlFor=""  className='font-semibold text-base'>Country / Region</label>
                    <div className='relative flex items-center justify-between'>
                    <input type="text" id='countryRegion' value={formValues.countryRegion} onChange={handleInput} className='border border-footer rounded-[10px] w-full lg:w-[453px] h-[75px] p-8 ' placeholder='Sri Lanka'/>
                    <button className='absolute cursor-pointer right-4'>
                      <Image src={"/Vector.png"} alt='dropdown' width={14} height={8}/>
                    </button>
                    </div>
                    {error.countryRegion && (<p className='text-red-500'>Country / Region is required</p>)}
                   </div>
                    
                    <div className='flex flex-col gap-8'>
                    <label htmlFor=""  className='font-semibold text-base'>Street address</label>
                    <input type="text" id='streetAddress' value={formValues.streetAddress} onChange={handleInput} className='border border-footer p-2 rounded-[10px] w-full lg:w-[453px] h-[75px]' />
                    {error.streetAddress && (<p className='text-red-500'>Street address is required</p>)}
                    </div>
                    
                    <div className='flex flex-col gap-8'>
                    <label htmlFor=""  className='font-semibold text-base'>Town / City</label>
                    <input type="text" id='townCity' value={formValues.townCity} onChange={handleInput} className='border border-footer p-2 rounded-[10px] w-full lg:w-[453px] h-[75px]' />
                    {error.townCity && (<p className='text-red-500'>Town / City is required</p>)}
                    </div>
                    
                   <div className='flex flex-col gap-8 '>
                   <label htmlFor=""  className='font-semibold text-base'>Province</label>
                    <div className='relative flex items-center justify-between'>
                    <input type="text" id='province' value={formValues.province} onChange={handleInput} className='border border-footer p-2 rounded-[10px] w-full lg:w-[453px] h-[75px] p-8 ' placeholder='Western Province'/>
                    <button className='absolute cursor-pointer right-4'>
                      <Image src={"/Vector.png"} alt='dropdown' width={14} height={8}/>
                    </button>
                    </div>
                    {error.province && (<p className='text-red-500'>Province is required</p>)}
                   </div>
                   
                   <div className='flex flex-col gap-8 '>
                   <label htmlFor=""  className='font-semibold text-base'>ZIP Code</label>
                    <input type="text" id='zipCode' value={formValues.zipCode} onChange={handleInput} className='border border-footer p-2 rounded-[10px] w-full lg:w-[453px] h-[75px]' />
                    {error.zipCode && (<p className='text-red-500'>ZIP code is required</p>)}
                   </div>
                    
                    <div className='flex flex-col gap-8 '>
                    <label htmlFor=""  className='font-semibold text-base'>Phone</label>
                    <input type="text" id='phone' value={formValues.phone} onChange={handleInput} className='border border-footer p-2 rounded-[10px] w-full lg:w-[453px] h-[75px]' />
                    {error.phone && (<p className='text-red-500'>Phone is required</p>)}
                    </div>
                   
                   <div className='flex flex-col gap-8 '>
                     <label htmlFor=""  className='font-semibold text-base'>Email address</label>
                     <input type="text" id='emailAddress' value={formValues.emailAddress} onChange={handleInput} className='border border-footer p-2 rounded-[10px] w-full lg:w-[453px] h-[75px]' />
                     {error.emailAddress && (<p className='text-red-500'>Email address is required</p>)}
                     <input type="text" id='additionalInfo' value={formValues.additionalInfo} onChange={handleInput} className='border border-footer rounded-[10px] w-full lg:w-[453px] h-[75px] p-8' placeholder='Additional information'/>
                   </div>

                 </form>
            </div>
            {/* right side */}
            <div className='w-full lg:w-[608px] mt-28 ml-6'>

              <div className='w-full md:w-[740px] lg:w-[533px] border-b-2'>
                <div className='flex justify-between'>
                  <div className='flex flex-col gap-5'>
                  <h2 className='font-medium text-2xl'>Product</h2>
                  {cartItem.length > 0 ? (
                    cartItem.map((item) => (
                       <div key={item._id}>
                         
                         <div className='flex items-center gap-3'> 
                           <h3 className='font-normal text-base text-footer'>{item.title}</h3>
                           <span className='font-medium text-xs'>x</span>
                           <span className='font-medium text-xs'>{item.quantity}</span>
                         </div>
                         
                       </div>
                    ))
                  ) : (
                    <p className='font-normal text-base text-footer'>No item in the cart</p>
                  )}
                    <p className='font-normal text-base'>Subtotal </p>
                    <p className='font-normal text-base mb-8'>Total</p>
                  </div>   

                  <div className='flex flex-col gap-5 items-end'>
                    <h2 className='font-medium text-2xl'>Subtotal</h2>
                    {cartItem.length > 0 ? (
                      cartItem.map((item) => (
                        <span key={item._id} className='font-light text-base'>${item.price}</span>
                      ))
                    ) : null}
                    <span className='font-light text-base'>{subTotal}</span>
                    <span className='font-bold text-2xl text-button'>{total}</span>
                  </div>
                </div>
              </div> 

              <div className='mt-16 w-full md:w-[740px] lg:w-[533px] '>
                
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-[14px] h-[14px] rounded-full bg-black' ></div>
                    <h2 className='font-normal text-base'>Direct Bank Transfer</h2>
                  </div>  
                    
                    <p className=' text-footer text-base font-light text-justify mb-4'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    
                    <div className='flex items-center gap-4 mb-3'>
                      <div className='w-[14px] h-[14px] rounded-full bg-white border-[1px] border-footer cursor-pointer'></div>
                      <p className='text-footer font-medium text-base'>Direct Bank Transfer</p>
                    </div>

                    <div className='flex items-center gap-4 mb-4'>
                      <div className='w-[14px] h-[14px] rounded-full bg-white border-[1px] cursor-pointer border-footer'></div>
                      <p className='text-footer font-medium text-base'>Cash On Delivery</p>
                    </div>

                    <p className='font-light text-base mb-8 text-justify'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold text-base'>privacy policy.</span> </p>
                    <div className='flex justify-center'>
                    <button onClick={handleOrder} className='w-full lg:w-[318px] h-[64px] font-normal text-xl border-[1px] border-black rounded-xl'>Place order</button>
                    </div>
              </div>

            </div>    
          </div>      
            {/* bottom section  */}
             <Profooter/>
    </div>
  )
}
