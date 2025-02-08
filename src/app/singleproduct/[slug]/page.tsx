'use client'
import Customized from '@/components/customized'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import { Product } from '../../../../types/products';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';
import Swal from 'sweetalert2';
import { addCart } from '@/app/action/action';
import Link from 'next/link';

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
export async function ProductPage ({params}: ProductPageProps) {
  const {slug} = await params;
  const product = await getProduct(slug);


  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
          e.preventDefault()
          Swal.fire({
            position : 'top-right',
            icon : 'success',
            title:`${product.title} Added to cart`,
            showConfirmButton: false,
            timer : 1500
          })
          addCart(product)
          
        }

  return(
    <>

     <div className='bg-[#F9F1E7] w-full flex items-center gap-8 px-4 py-8 sm:px-20 sm:py-8'>
       <div className='flex items-center gap-4'>
         <p className='font-normal text-base text-footer'><Link href={'/'}>Home</Link></p>
         <IoIosArrowForward />
       </div>
       <div className='flex items-center gap-4'>
         <p className='font-normal text-base text-footer'><Link href={'/shop'}>Shop</Link></p>
         <IoIosArrowForward />
       </div>
       <div className='border h-8 border-footer'></div>
       <span className='font-normal text-base '>{product.title}</span>
     </div>

    <div className='max-w-full m-8'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* left side */}
          <div className='flex flex-col space-y-3 '>
            {product.productImage && 
              <Image key={product._id} src={urlFor(product.productImage).url()} alt='image product' 
              width={100} height={100}
              className='rounded-lg shadow-md '/>
            } 
            {product.productImage && 
              <Image src={urlFor(product.productImage).url()} alt='image product' 
              width={100} height={100}
              className='rounded-lg shadow-md'/>
            } 
            {product.productImage && 
              <Image src={urlFor(product.productImage).url()} alt='image product' 
              width={100} height={100}
              className='rounded-lg shadow-md'/>
            } 
            {product.productImage && 
              <Image src={urlFor(product.productImage).url()} alt='image product' 
              width={100} height={100}
              className='rounded-lg shadow-md'/>
            } 
          </div>
          
          {/* mid image */}
          <div className='aspect-square'>
            {product.productImage && 
              <Image src={urlFor(product.productImage).url()} alt='image product' 
              width={500} height={500}
              className='rounded-lg shadow-md'/>
            } 
          </div>
         
          {/* text right side */}
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-normal '>
            {product.title}
            </h1>
            <p className='text-2xl text-footer font-medium'>
              ${product.price}
            </p>
            <p className='font-normal text-base '>
              {product.description}
            </p>  
        
             <Customized/>  

            <div className='flex gap-2'>
              <div className='border rounded-xl px-8 py-2'>
                 <button>-</button>
                  1
                 <button >+</button>
              </div> 
               <button onClick={(e) => handleAddToCart(e,product)} className=" text-black font-normal border border-black rounded-xl px-8 py-2">
                  Add to cart
               </button>
               <button className=" text-black font-normal border border-black rounded-xl px-8 py-2">
                  Compare
               </button>
            </div>

             <div className='border'></div>
          </div>
       </div>      
        
    </div>

       {/* bottom */}
     <div className='h-[1px] bg-[#D9D9D9] mt-12'></div>

      <div className='m-8'>
       <div className='flex flex-col md:flex-row justify-center gap-8'>
         <h1 className='font-medium text-2xl'>Description</h1>
         <h2 className='font-medium text-2xl text-footer'>Additional Information</h2>
         <h3 className='font-medium text-2xl text-footer'>Reviews [5]</h3>
       </div>
       <div className='md:px-40 md:py-4'>
       <p className='font-normal text-sm md:text-base text-footer text-justify '>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
       <p className='font-normal text-sm md:text-base text-footer text-justify '>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
       </div>   
          <div className='flex flex-col lg:flex-row gap-4 justify-center'>
             <Image src={'/Group 107.png'} alt='sofa' width={505} height={248}/>
             <Image src={'/Group 106.png'} alt='sofa' width={505} height={248}/>
          </div>
      </div>

      <div className='h-[1px] bg-[#D9D9D9] mt-12'></div>

      <div>
       <h1 className='font-semibold text-4xl text-center m-8'>Related Products</h1>

      </div>
   </>
  )
}

