import Link from 'next/link'
import React from 'react'

const Regbtn = () => {
  return (
    <div className='flex gap-4 mt-2'>
      <div>
        <button className='border py-1 px-3 rounded-md'>
            <Link className='text-sm' href='/signin'>Sign In</Link>
        </button>
      </div>
      <div>
        <button className='border-1-white bg-black py-1 px-3 rounded-md'>
            <Link className='text-sm text-white' href={'#'}>Start for free</Link>
        </button>
      </div>
    </div>
  )
}

export default Regbtn
