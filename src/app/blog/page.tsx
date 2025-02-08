import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import Recentpost from '@/components/recentpost';
import Profooter from '@/components/profooter';
import Link from 'next/link';

export default function Blog() {
  return (
    <div>

           <div className="relative ">
              <Image src={'/contact/Rectangle 1.png'} alt="background image" width={1440} height={316} className='w-full h-auto'/>

              <div className="absolute top-[1%] sm:top-[5%] md:top-[10%] lg:top-[30%] left-[46%] flex justify-center flex-col items-center ">

                <Image src={'/navbar-img/logo.png'} alt="logo" width={77} height={77} className='w-[50px]'/>
                <h3 className="font-medium text-2xl sm:text-4xl md:text-5xl">Blog</h3>

                <div className="flex items-center space-x-2">
                  <Link href={'/'}>
                   <h3 className="font-medium text-sm sm:text-base">Home</h3>
                  </Link>
                  <IoIosArrowForward className='text-lg'/>
                  <Link href={'/blog'}>
                   Blog
                  </Link>
                  
                </div>

              </div>
            </div>

          <div className='flex flex-col lg:flex-row '>
                    {/* left side */}
                <div className='md:w-3/4 lg:w-[817px] p-10 ml-8 '>   

                 {/* blog 1 */}
                 <div className='shadow-md p-8'>

                    <Image src={'/blog/blog1.png'} alt='blog image' width={817} height={500}/>

                   <div className='flex items-center gap-4 mt-4'>

                    <div className='flex items-center gap-2'> 
                      <Image src={'/blog/admin-users.png'} alt='admin icon' width={20} height={20} />
                      <p className='text-footer text-base font-normal'>Admin</p>
                    </div>
                    <div className='flex items-center gap-2'> 
                      <Image src={'/blog/calender.png'} alt='admin icon' width={20} height={20} />
                      <p className='text-footer text-base font-normal'>14 Oct 2022</p>
                    </div>
                    <div className='flex items-center gap-2'> 
                      <Image src={'/blog/tag.png'} alt='admin icon' width={20} height={20} />
                      <p className='text-footer text-base font-normal'>Wood</p>
                    </div>

                   </div> 

                    <div className='mt-6'>
                      <h1 className='font-medium text-3xl'>Going all-in with millennial design</h1>
                      <p className='font-normal text-[15px] text-footer text-justify mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                      <button className='font-normal text-base underline mt-8'>Read more</button>
                    </div>
                 </div>

                 {/* blog 2 */}
                 <div className='mt-10 shadow-md p-8'>
                    <Image src={'/blog/blog2.png'} alt='blog image' width={817} height={500}/>

                    <div className='flex items-center gap-4 mt-4'>

                    <div className='flex items-center gap-2'> 
                      <Image src={'/blog/admin-users.png'} alt='admin icon' width={20} height={20} />
                      <p className='text-footer text-base font-normal'>Admin</p>
                    </div>
                    <div className='flex items-center gap-2'> 
                      <Image src={'/blog/calender.png'} alt='admin icon' width={20} height={20} />
                      <p className='text-footer text-base font-normal'>14 Oct 2022</p>
                    </div>
                    <div className='flex items-center gap-2'> 
                      <Image src={'/blog/tag.png'} alt='admin icon' width={20} height={20} />
                      <p className='text-footer text-base font-normal'>Handmade</p>
                    </div>

                   </div> 

                    <div className='mt-6'>
                    <h1 className='font-medium text-3xl '>Exploring new ways of decorating</h1>
                    <p className='font-normal text-[15px] text-footer text-justify mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <button className='font-normal text-base underline mt-6'>Read more</button>
                    </div>
                 </div>

                 {/* blog 3 */}
                 <div className='mt-10 shadow-md p-8'>
                    <Image src={'/blog/blog3.png'} alt='blog image' width={817} height={500}/>

                    <div className='flex items-center gap-4 mt-4'>

                    <div className='flex items-center gap-2'> 
                      <Image src={'/blog/admin-users.png'} alt='admin icon' width={20} height={20} />
                      <p className='text-footer text-base font-normal'>Admin</p>
                    </div>
                    <div className='flex items-center gap-2'> 
                      <Image src={'/blog/calender.png'} alt='admin icon' width={20} height={20} />
                      <p className='text-footer text-base font-normal'>14 Oct 2022</p>
                    </div>
                    <div className='flex items-center gap-2'> 
                      <Image src={'/blog/tag.png'} alt='admin icon' width={20} height={20} />
                      <p className='text-footer text-base font-normal'>Wood</p>
                    </div>

                   </div> 

                    <div className='mt-6'>
                    <h1 className='font-medium text-3xl'>Handmade pieces that took time to make</h1>
                    <p className='font-normal text-[15px] text-footer text-justify mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <button className='font-normal text-base underline mt-8'>Read more</button>
                    </div>
                 </div>
                </div>

                   {/* right side  */}
                <div>   

                  <div className='m-16'>
                    <form className='relative flex items-center justify-between  '>
                      <input type="text" className='border-footer border-2 rounded-xl w-full sm:w-[311px] h-[58px] ' />
                    <button type ="submit" className='absolute cursor-pointer lg:right-4'>
                      <Image src={'/blog/akar-icons_search.png'} alt='icon' width={24} height={24}/>
                    </button>
                    </form>

                    <div className='m-8'>
                       <h2 className='text-2xl font-medium'>Categories</h2>

                       <div className=' mt-6 space-y-8 '>
                         <p className='text-footer text-base font-normal flex justify-between'>Crafts<span>2</span></p>
                         <p className='text-footer text-base font-normal flex justify-between'>Design<span>8</span></p>
                         <p className='text-footer text-base font-normal flex justify-between'>Handmade<span>7</span></p>
                         <p className='text-footer text-base font-normal flex justify-between'>Interior<span>1</span></p>
                         <p className='text-footer text-base font-normal flex justify-between'>Wood<span>6</span></p>
                       </div>
                    </div>
                 </div>

                 <Recentpost/>

                </div> 
          </div>
                <div className=" flex gap-6 justify-center" >
                  <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">1</button>
                  <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">2</button>
                  <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">3</button>
                  <button className="w-[4rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">Next</button>
               </div>
              
           <Profooter/>    
    </div>
  )
}
