import { IProduct } from '@/interfaces/product.interface';

import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { renderStars } from '../shared/review';
import AddtoCartBtn from './AddtoCartBtn';

export default async function ProductItem({product} : {product : IProduct}) {

  return (
     <div className='px-3'>
                <div
                  className="bg-gray-200 flex flex-col mb-4
               justify-center items-center text-center"
                >
                  <div className="relative group w-full">
                  <Link href={`/products/${product._id}`}>
                    <Image
                      src={product.imageCover}
                      alt={product.title}
                      width={1920}
                      height={355}
                      loading="lazy"
                      className="w-full h-[15.625rem] object-contain"
                    />
                  </Link>
                   
                    <AddtoCartBtn
                    className="w-full absolute bottom-0 left-0 invisible translate-y-full group-hover:translate-y-0 group-hover:visible "
                      
                    productId={product._id} /> 
                  </div>
                </div>
                <h2
                  title={product.title}
                  className="font-medium line-clamp-1 text-center mb-2"
                ><Link href={`/products/${product._id}`}>
                  {product.title}
                  </Link>
                </h2>
                <div className="flex item-center justify-between">
                  <span className="font-medium text-red-500 ">
                    {product.price}
                  </span>
                  <div className="flex flex-row items-center  gap-2 font-semibold text-sm text-gray-500">
                    {renderStars(product.ratingsAverage)}
                    <span>{product.ratingsAverage}</span>
                  </div>
                </div>
              </div>
  )
}
