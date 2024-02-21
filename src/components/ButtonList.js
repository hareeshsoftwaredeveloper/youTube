import React from 'react'
import { butonsList } from '../Utilis/buttonsList'

const ButtonList = () => {
  return (
    <div className='fixed top-50  py-2 bottom-150 left-50 w-full z-100 bg-white'>
      {butonsList.map((button, index) => <button className={`px-5 py-2 font-semibold bg-gray-200 rounded-lg mx-2 my-4 ${index===0 && " bg-red-500 text-white"} hover:bg-gray-300`} key={index}>{ button}</button> )}
    </div>
  )
}

export default ButtonList