import { Button } from '@/components/ui/button'
import React from 'react'

export default function WishlistPage() {
  return (
   <section className="py-20">
      <div className="container mx-auto px-6">
      <div className='flex justify-between items-center'>
        <h3 className='text-xl font-semibold'>Wishlist (4)</h3>
        <Button className='rounded-lg py-8 px-12 hover:bg-black hover:text-white' variant={"outline"} >Move All To Bag</Button>
      </div>
      <section>
        
      </section>
      </div>
    </section>
  )
}

