'use client'
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import BlowHero from "@/components/shopBlowHero";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "../../../types/products";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function Products(){
      const [product, setProduct] = useState<Product[]>([])
     
       useEffect(() => {
         async function fetchproduct(){
           const data:Product[] = await client.fetch(allProducts) 
           setProduct(data)
         }
         fetchproduct()
       },[])

       return(
        
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  p-10">
          {product.map((product) => (

          <div key={product._id} className="rounded-lg p-4 hover:shadow-lg transition duration-300 ">

           <Link href={`/singleproduct/${product.slug.current}`}>
            {product.productImage && (
              <Image src= {urlFor(product.productImage).url()} 
              alt="image" width={200} height={200} className="w-full h-80 rounded-md object-cover"/>
            )}
            <h1 className="text-lg font-bold mt-6">
               {product.title}
            </h1>
            <p className="text-footer mt-2 ">
            {product.price ? `$${product.price}` : "Price not available"}
            </p>
            
            </Link>
            
          </div>

        )
        )}
          </div>
       )
}    


// export default function ShopHero() {
 






//   return (
//     <>
//       {/* shopsect */}
//       <div className="relative">
//         <Image src={'/contact/Rectangle 1.png'} alt="Picture" width={1440} height={316}/>

//         <div className="absolute top-[1%] sm:top-[5%] md:top-[10%] lg:top-[30%] left-[46%] flex justify-center flex-col items-center ">
        
//         <Image src={'/navbar-img/logo.png'} alt="logo" width={77} height={77} className="w-[50px]"/>
//           <h3 className="font-medium text-2xl sm:text-4xl md:text-5xl">Shop</h3>

//           <div className="flex items-center space-x-2">
//             <h3 className="font-medium text-sm sm:text-base">Home</h3>
//             <IoIosArrowForward />
//             <h3 className="font-light text-sm sm:text-base">Shop</h3>
//           </div>
          
//         </div>
        
//       </div>
      
//       <BlowHero />

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-evenly m-10 gap-4">
        
//       </div>



//     <div className=" flex gap-2 justify-center " >
//      <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">1</button>
//      <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">2</button>
//      <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">3</button>
//      <button className="w-[4rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-button cursor-pointer text-white:">Next</button>
//     </div>

//      <div className="mt-12 py-12 px-4 bg-[#FAF3EA]">
//       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
        
//         <div className="flex items-center space-x-4">
    
//         <Image src="/contact/trophy 1.png" width={60} height={60} alt="trophy" />
//          <div>
//           <h4 className="font-semibold text-[20px] sm:text-[25px]">High Quality</h4>
//           <p className="font-medium text-base sm:text-lg text-cardtext">crafted from top materials</p>
//          </div>
//         </div>

//         <div className="flex items-center space-x-4">
//         <Image src="/contact/guarantee.png" width={60} height={60} alt="warrenty" />
//           <div>
//           <h4 className="font-semibold text-[20px] sm:text-[25px]">Warranty Protection</h4>
//           <p className="font-medium text-base sm:text-lg text-cardtext">Over 2 years</p>
//           </div>
//         </div>

//         <div className="flex items-center space-x-4">
//         <Image src="/contact/shipping.png" width={60} height={60} alt="shipping" />
//           <div>
//           <h4 className="font-semibold text-[20px] sm:text-[25px]">Free Shipping</h4>
//           <p className="font-medium text-base sm:text-lg text-cardtext">Order over 150 $</p>
//           </div>
//         </div>

//         <div className="flex items-center space-x-4">
//         <Image src="/contact/Vector (2).png" width={60} height={60} alt="support" />
//           <div>
//           <h4 className="font-semibold text-[20px] sm:text-[25px]">24 / 7 Support</h4>
//           <p className="font-medium text-base sm:text-lg text-cardtext">Dedicated support</p>
//           </div>
//         </div>
//       </div>
//      </div>
//     </>
//   );
// }