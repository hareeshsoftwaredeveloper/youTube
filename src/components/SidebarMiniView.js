import React from 'react'
import { SubscriptionsIcon, homeIcon, shortsIcon } from '../Utilis/constants'
import { Link } from 'react-router-dom'


const SidebarMiniView = () => {
  
  return (
    <div className=' py-3 col-span-1 -ml-6 '> 
      <Link to="/">
          <div className='mb-8 flex flex-col items-center cursor-pointer hover:bg-gray-300 py-2 rounded-lg' >
              <img alt='home' className='h-8' src={homeIcon} />
              <h1 className='text-[12px]'>Home</h1>
        </div> 
        </Link>
          
          <div className='mb-8 flex flex-col items-center cursor-pointer hover:bg-gray-300 py-2 rounded-lg'>
              <img alt='home' className='h-8' src={shortsIcon} />
              <h1 className='text-[12px]'>Shorts</h1>
          </div>   
          
          <div className='mb-8 flex flex-col items-center cursor-pointer hover:bg-gray-300 py-2 rounded-lg'>
              <img alt='home' className='h-8' src={SubscriptionsIcon} />
              <h1 className='text-[12px]'>Subscriptions</h1>
          </div>   
          
    </div>
  )
}












export default SidebarMiniView