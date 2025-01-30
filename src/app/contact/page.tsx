import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneFilled } from "react-icons/tb";
import { TbClockHour4Filled } from "react-icons/tb";



export default function Contact () {
  return (
    <>
      <div className="relative">

        <Image src={'/contact/Rectangle 1.png'} alt="picture" width={1440} height={316} className="w-full h-auto"/>

        <div className="absolute top-[1%] sm:top-[5%] md:top-[10%] lg:top-[30%] left-[46%] flex text-center justify-center flex-col items-center ">

          <Image src={'/navbar-img/logo.png'} alt="logo" width={77} height={77} className="w-[50px]"/>

          <h3 className="font-medium text-2xl sm:text-4xl md:text-text-5xl">Contact</h3>
          <div className="flex items-center space-x-2 ">
            <h3 className="font-medium text-sm sm:text-base">Home</h3>
            <IoIosArrowForward className="text-lg"/>
            <h3 className="font-light text-sm sm:text-base">Contact</h3>
          </div>
        </div>

      </div> 

      <div className="text-center w-15 mt-20">
        <h2 className="font-bold text-3xl sm:text-4xl lg:5xl">Get In Touch With Us</h2>
        <p className="text-footer text-base font-normal p-6">
          For More Information About Our Product & Services. Please Feel Free To Drop Us<br /> An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-16 gap-8 justify-evenly leading-8  ">
        <div className="w-full lg:w-[16rem] mt-16 ">
         <div className="flex gap-8 ">
              <div>
                <FaLocationDot size={27}/> 
              </div>

              <div>
              <h2 className="font-medium text-2xl">Address</h2>
              <p className="font-normal text-base mt-2">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
         </div>

         <div className="flex gap-8 mt-8">
            <div>
              <TbPhoneFilled size={30}/>
            </div>
            <div>
              <h2 className="font-medium text-2xl">Phone</h2>
                <p className="font-normal text-base mt-2">Mobile: +(84) 546-6789 </p>
                <p className="font-normal text-base">Hotline: +(84) 456-6789</p>
            </div>
         </div>

         <div className="flex gap-8 mt-8">
            <div>
              <TbClockHour4Filled size={25} />
            </div>

            <div>
              <h2 className="font-medium text-2xl">Working Time</h2>
              <p className="font-normal text-base mt-2">Monday-Friday: 9:00 - 22:00 </p>
              <p className="font-normal text-base">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
         </div>

        </div>

        <div className="w-full lg:w-[24rem] mt-8 lg:mt-16 ">
            <form className="flex gap-8 flex-col  ">
                <label htmlFor="" className="font-medium text-base">Your name</label>
                <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[24rem]" placeholder="name" />
                <label htmlFor="" className="font-medium text-base" >Email address</label>
                <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[24rem]" placeholder="email" />
                <label htmlFor="" className="font-medium text-base">Subject</label>
                <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[24rem]" placeholder="optional" />
                <label htmlFor="" className="font-medium text-base">Message</label>
                <textarea id="text" className="border-gray-200 border-2 p-2 rounded-md w-[24rem]" rows={2}  placeholder="Hi! i’d like to ask about" />
                <button className="self-start bg-button text-white mt-6 p-3 w-full lg:w-[14rem] rounded-md">Submit</button>
            </form>
        </div>
        
      </div>
      
      <div className=" mt-14 mb-5 flex flex-col md:flex-row justify-evenly items-center p-2 w-full lg:h-[270px] bg-[#FAF3EA]">
        
        <div className="flex items-center gap-4 mb-6 sm:mb-0">
        <Image src="/contact/trophy 1.png" width={60} height={60} alt="trophy"/>
         <div>
          <h4 className="font-semibold text-[20px] sm:text-[25px]">High Quality</h4>
          <p className="font-medium text-base sm:text-lg text-cardtext">crafted from top materials</p>
         </div> 
        </div>

        <div className="flex items-center gap-4 mb-6 sm:mb-0">
        <Image src="/contact/guarantee.png" width={60} height={60} alt="wwarranty" />
          <div>
          <h4 className="font-semibold text-[20px] sm:text-[25px]">Warranty Protection</h4>
          <p className="font-medium text-base sm:text-lg text-cardtext">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6 sm:mb-0">
        <Image src="/contact/shipping.png" width={60} height={60} alt="shipping" />
          <div>
          <h4 className="font-semibold text-[20px] sm:text-[25px]">Free Shipping</h4>
          <p className="font-medium text-base sm:text-lg text-cardtext">Order over 150 $</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6 sm:mb-0">
        <Image src="/contact/Vector (2).png" width={60} height={60} alt="support" />
          <div>
          <h4 className="font-semibold text-[20px] sm:text-[25px]">24 / 7 Support</h4>
          <p className="font-medium text-base sm:text-lg text-cardtext">Dedicated support</p>
          </div>
        </div>
      </div>
    
    </>
  );
}