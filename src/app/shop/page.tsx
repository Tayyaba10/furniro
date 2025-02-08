'use client'
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Profooter from "@/components/profooter";
import Swal from "sweetalert2";
import { addCart } from "../action/action";
import Pagination from "@/components/pagination";
import { Product } from "../../../types/products";
import BlowHero from "@/components/shopBlowHero";



export default function Products(){
      const [product, setProduct] = useState<Product[]>([])
     // const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 8;


      const totalPages = Math.ceil(product.length / itemsPerPage);
      const displayedProducts = product.slice(
       (currentPage - 1) * itemsPerPage,
       currentPage * itemsPerPage
      );
      
       useEffect(() => {
         async function fetchproduct(){
           const data:Product[] = await client.fetch(allProducts) 
           setProduct(data)
         }
         fetchproduct()
       },[])
      
    //    const handleFilter = (filtered: Product[]) => {
    //     setFilteredProducts(filtered);
    // };

    //const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : product;
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
         <div className="relative">
            <Image src={'/contact/Rectangle 1.png'} alt="Picture" width={1440} height={316}/>

         <div className="absolute top-[1%] sm:top-[5%] md:top-[10%] lg:top-[30%] left-[46%] flex justify-center flex-col items-center ">
        
          <Image src={'/navbar-img/logo.png'} alt="logo" width={77} height={77} className="w-[50px]"/>
           <h3 className="font-medium text-2xl sm:text-4xl md:text-5xl">Shop</h3>

           <div className="flex items-center space-x-2">
             <Link href={'/'}>
             <h3 className="font-medium text-sm sm:text-base">Home</h3>
             </Link>
             <IoIosArrowForward />
             <Link href={'/shop'} >
             <h3 className="font-light text-sm sm:text-base">Shop</h3>
             </Link>
           </div>
          
         </div>
        </div>

          <BlowHero/>
         {/* Add FilterComponent Here
         {product.length > 0 && (
            <div className="p-10">
               <FilterComponent products={product} onFilters={handleFilter} />
            </div>
         )}
             */}

        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  p-10">

          {displayedProducts.map((product) => (
          <div key={product._id} className="group relative rounded-lg p-4 hover:shadow-lg transition duration-300 ">

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
            <button onClick={(e) => handleAddToCart(e,product)} className="absolute bottom-64 left-1/2 transform -translate-x-1/2 bg-white text-button font-semibold py-2 px-8 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  Add to cart
            </button>
            <button className="absolute bottom-52 left-20 transform -translate-x-1/2 text-white font-semibold  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
               share
            </button>
            <button className="absolute bottom-52 left-40 transform -translate-x-1/2 text-white font-semibold  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              compare
            </button>
            <button className="absolute bottom-52 left-60 transform -translate-x-1/2 text-white font-semibold  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              Like
            </button>
            </Link>
           
          </div>
             
           )
          )}
            
        </div>
       
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
        />
       
        <Profooter/>
       </> 
       )
}    
