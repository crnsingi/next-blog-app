'use client'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        <label htmlFor="">
            <Image src={} />
        </label>
      </form>
    </>
  )
}

export default page 