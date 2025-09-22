"use client"
import Link from 'next/link'
import React from 'react'

export default function error({error}: {error : Error}) {
  return (
    <div className='flex flex-col justify-center h-screen items-center'>
        <h1>Something went wrong, please go back to {error.message}<Link className='underline text-red-600' href={'/'}>Home</Link></h1>
      
    </div>
  )
}
