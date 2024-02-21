import React from 'react'
import Sidebar from './Sidebar'
// import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
      <div className='grid grid-flow-col grid-cols-12 mt-20'>
         <Sidebar/> 
         <Outlet/>
    </div>
  )
}

export default Body