import { blog_data } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogItem = () => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
    <Image src={blog_data[0].image} alt='' width={400} height={400} className='border-b border-black' />
    <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{blog_data[0].category}</p>
    <div className='p-5'>
        <h5>{blog_data[0].title}</h5>

    </div>
    </div>
  )
}

export default BlogItem