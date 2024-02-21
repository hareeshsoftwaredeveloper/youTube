import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import PremiumBanner from './PremiumBanner'

const MainContainer = () => {
  return (
      <div className='col-span-10 '>
         <ButtonList />
          <PremiumBanner/>
          <VideoContainer/>
      </div>
  )
}

export default MainContainer