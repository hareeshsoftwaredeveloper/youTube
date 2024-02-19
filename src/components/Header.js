import React from 'react'
import {youTubeApi} from "../Utilis/constants"
import {useDispatch} from "react-redux"
import { toggleSidebar } from '../Utilis/sideBarSlice'
import { useState, useEffect } from "react"


const Header = () => {
  
  
  const dispatch = useDispatch()
  
  const showSidebar = () => {
      dispatch(toggleSidebar())
  }

  const [searchQuery, setSearchQuery] = useState("")
  console.log(searchQuery)
 
  const getSuggestions = async () => {
    const data = await fetch(youTubeApi+searchQuery)
    const json = await data.json()
    console.log(json)
  }

  useEffect(() => {

    // Make an api call after every key press , but if the time between two API calls is less than 200ms then decline it 
    const timer=setTimeout(() => {
      getSuggestions()
    }, 200);

    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  return (
      <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
          <div className='flex col-span-1'>
            <img alt='logo' onClick={showSidebar}  className='h-8 cursor-pointer hover:bg-gray-300 p-2 rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgz8qMxRmaHif6zYN0OyOJ2zi8gBulBwLPnw&usqp=CAU'/>
            <img alt="youtube-logo" className='h-8 mx-6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEynCGDrFj3BQG1Aff7q4ARbWM0s7FK8jfng&usqp=CAU'/>
          </div>
      
          <div className='col-span-10 px-14'>
              <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type='text' className='border border-gray-400 w-2/3 p-2 rounded-l-full' />
              <button className='border border-gray-400 p-2 rounded-r-full px-4 bg-gray-100 text-white'>🔍</button>
          </div>

          <div className=' col-span-1'>
              <img alt="user-icon"className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIz1RVkcNo4eZZBjE4_UOPUXYzc0Hh4AunmA&usqp=CAU"/>
          </div>
              
    </div>
  )
}

export default Header