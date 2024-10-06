import React from 'react'
import HeroPageText from '../HeroPageText/HeroPageText'
import PageImage from './HeroPageImage/PageImage'

const HeroPage = () => {
  return (
    <div className ='grid place-items-center m-auto'>
      <div className='flex gap-11'>
       <div >
         <HeroPageText />
       </div>

       <div>
         <PageImage />
       </div>
      </div>
    </div>
  )
}

export default HeroPage
