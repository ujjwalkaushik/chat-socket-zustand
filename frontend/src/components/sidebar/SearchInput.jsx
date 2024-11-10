import React from 'react'
import { TbMessageSearch } from "react-icons/tb";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' className='input input-bordered rounded-full' placeholder='Search.....' />

        <button type='submit' className='btn btn-circle bg-gray-500 text-white'>
        <TbMessageSearch className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput