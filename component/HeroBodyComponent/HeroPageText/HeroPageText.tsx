import React from 'react'
import TopText from './TopText'
import MainText from './MainText'
import BottomText from './BottomText'

const HeroPageText = () => {
  return (
    <div className=' w-custom flex-col gap-2'>
      <TopText />
      <MainText />
      <BottomText />
    </div>
  )
}

export default HeroPageText
