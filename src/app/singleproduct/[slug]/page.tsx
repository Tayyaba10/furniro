import Customized from '@/components/customized'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import { Product } from '../../../../types/products';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';

interface ProductPageProps {
  params: Promise<{slug : string}>
}

export async function getProduct(slug : string ): Promise<Product> {
  return client.fetch(
    groq `*[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      price,
      description,
      category,
      _type,
      productImage,
      }`,{slug}
  )
  
  
}
export default async function ProductPage ({params}: ProductPageProps) {
  const {slug} = await params;
  const product = await getProduct(slug);

  return(
    <div className='max-w-7xl mx-auto px-4 '>
     
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

          <div className='aspect-square'>
            {product.productImage && 
              <Image src={urlFor(product.productImage).url()} alt='image product' 
              width={500} height={500}
              className='rounded-lg shadow-md'/>
            } 
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-normal '>
            {product.title}
            </h1>
            <p className='text-2xl text-footer font-medium'>
              {product.price}
            </p>
            <p className='font-normal text-base'>
              {product.description}
            </p>               
         </div>
       </div> 
         
   </div>
  )
}



// export default function Singlepage() {
//   return (
//     <>
//     <div className='bg-[#F9F1E7] w-full flex items-center gap-8 px-4 py-8 sm:px-20 sm:py-8'>

//       <div className='flex items-center gap-4'>
//         <p className='font-normal text-base text-footer'>Home</p>
//         <IoIosArrowForward />
//       </div>
//       <div className='flex items-center gap-4'>
//         <p className='font-normal text-base text-footer'>Home</p>
//         <IoIosArrowForward />
//       </div>
//       <div className='border h-8 border-footer'></div>
//       <p className='font-normal text-base '>Asgaard sofa</p>
//     </div>

//     <div className='px-4 md:px-8 lg:px-16 relative flex flex-col lg:flex-row gap-16 mt-8'>
//        <div className='flex flex-col gap-8'>
//         <Image src={'/cart/Outdoor sofa set 1.png'} alt='' width={70} height={80} className='bg-[#F9F1E7]'/>
//         <Image src={'/Group 98.png'} alt='' width={70} height={80} className='bg-[#F9F1E7]'/>
//         <Image src={'/Group 97.png'} alt='' width={70} height={80} className='bg-[#F9F1E7]'/>
//         <Image src={'/Group 96.png'} alt='' width={70} height={80} className='bg-[#F9F1E7]'/>
//        </div>
//       {/* image */}
//       <div className='w-full lg:w-1/2 top-20 h-[420px] bg-[#F9F1E7] '>
//         <Image src={'/Asgaard sofa 3.png'} alt='sofe set' width={500} height={300} />
        
//       </div>

//       {/* text  */}
//       <div className='w-full lg:w-1/2 flex flex-col gap-4 '>
//         <h1 className='font-normal text-[42px]'>Asgaard sofa</h1>
//          <div>
//            <h2 className='text-footer font-medium text-2xl'>Rs. 250,000.00</h2>
//          </div>
//          <div className='flex items-center gap-6 '>
//             <Image src={'/Group 160.png'} alt='star' width={124} height={24} />
//             <p className='text-footer'>|</p>
//             <h4 className='text-footer font-normal text-[13px] '>5 Customer Review</h4>
//          </div>
//           <p className='font-normal text-[13px]'>
//           Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
//           </p>

//             {/* colur and size define  */}
//             <Customized/>
            
//             <div className='flex gap-4'>
//               <input className='font-normal text-xl rounded-xl w-24 border border-footer' type='number' placeholder='1'/>
//               <button className='font-normal text-xl rounded-xl border border-black px-4 py-2'><Link href={'/cart'}>Add To Cart</Link></button>
//               <button className='font-normal text-xl rounded-xl border border-black px-4 py-2'><Link href={'/compare'}>+    Compare</Link></button>
              
//             </div>
//           <div className='h-[1px] bg-[#D9D9D9]'></div>

//           <div className='flex flex-row gap-8'>
//             <div className='flex flex-col gap-4'>
//               <h1 className='font-normal text-base text-footer'>SKU</h1>
//               <h1 className='font-normal text-base text-footer'>Category</h1>
//               <h1 className='font-normal text-base text-footer'>Tags</h1>
//               <h1 className='font-normal text-base text-footer'>Share</h1>
              
//             </div>
//               <div className='flex flex-col gap-4'>
//                 <span className='font-medium text-base text-footer'>:</span>
//                 <span className='font-medium text-base text-footer'>:</span>
//                 <span className='font-medium text-base text-footer'>:</span>
//                 <span className='font-medium text-base text-footer'>:</span>
//               </div>
           
//               <div className='flex flex-col gap-4'>
//                 <span className='font-normal text-base text-footer'>SS001</span>
//                 <span className='font-normal text-base text-footer'>Sofas</span>
//                 <span className='font-normal text-base text-footer'>Sofa, Chair, Home, Shop</span>
//                 <div className='flex gap-6'>
//                   <Image src={'/akar-icons_facebook-fill.png'} alt='' width={20} height={20}/>
//                   <Image src={'/akar-icons_linkedin-box-fill.png'} alt='' width={20} height={20}/>
//                   <Image src={'/ant-design_twitter-circle-filled.png'} alt='' width={26} height={26}/>
//                 </div>
//               </div>
//           </div>
             
//       </div>
      
//     </div>
//      {/* bottom */}
//      <div className='h-[1px] bg-[#D9D9D9] mt-12'></div>

//      <div className='m-8'>
//       <div className='flex flex-col md:flex-row justify-center gap-8'>
//         <h1 className='font-medium text-2xl'>Description</h1>
//         <h2 className='font-medium text-2xl text-footer'>Additional Information</h2>
//         <h3 className='font-medium text-2xl text-footer'>Reviews [5]</h3>
//       </div>
//       <div className='md:px-40 md:py-4'>
//       <p className='font-normal text-sm md:text-base text-footer text-justify '>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
//       <p className='font-normal text-sm md:text-base text-footer text-justify '>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
//       </div>   
//          <div className='flex flex-col lg:flex-row gap-4 justify-center'>
//             <Image src={'/Group 107.png'} alt='sofa' width={505} height={248}/>
//             <Image src={'/Group 106.png'} alt='sofa' width={505} height={248}/>
//          </div>
//      </div>

//      <div className='h-[1px] bg-[#D9D9D9] mt-12'></div>

//      <div>
//       <h1 className='font-semibold text-4xl text-center m-8'>Related Products</h1>
//      </div>
//    </>
//   )
// }
