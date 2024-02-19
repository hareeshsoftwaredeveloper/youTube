import React from 'react'
import { butonsList } from '../Utilis/buttonsList'

const ButtonList = () => {
  return (
    <div>
      {butonsList.map((button, index) => <button className={`px-5 py-2 font-semibold bg-gray-200 rounded-lg mx-2 my-4 ${index===0 && "bg-black text-white"} hover:bg-gray-300`} key={index}>{ button}</button> )}
    </div>
  )
}

export default ButtonList