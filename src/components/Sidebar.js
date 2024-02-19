import React from 'react'
import { explore, subscriptionsList, youList } from '../Utilis/sidebarConstants'
import { SubscriptionsIcon, homeIcon, shortsIcon } from '../Utilis/constants'
import SidebarList from './SidebarList'
import { useSelector } from 'react-redux'
import SidebarMiniView from './SidebarMiniView'
import { Link } from 'react-router-dom'

const Sidebar = () => {
 
  const showSidebar = useSelector(store => store.sidebar.showSidebar)

  return (
  
    <>
      {showSidebar ?
        <div className='p-6 h-[450px] overflow-y-scroll col-span-1'>
          <div className='my-3 '>
            <div className='flex items-center'>
              <img alt='home-icon' className='h-10 mr-5' src={homeIcon} />
              <h1><Link to="/">Home</Link></h1>
            </div>
          
            <div className='flex items-center'>
              <img alt='shorts-icon' className='h-10 mr-5' src={shortsIcon} />
              <h1>Shorts</h1>
            </div>
          
            <div className='flex items-center'>
              <img alt='subscriptions-icon' className='h-10 mr-5' src={SubscriptionsIcon} />
              <h1>Subscriptions</h1>
            </div>
          </div>
          <hr />

          <div>
            <SidebarList youList={youList} name="You" />
            <SidebarList youList={subscriptionsList} name="Subscriptions" />
            <SidebarList youList={explore} name="Explore" />
          </div>
        </div >
       : <SidebarMiniView/>}
      
    </>
    )
        
}

export default Sidebar