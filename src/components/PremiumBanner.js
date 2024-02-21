import React, { useEffect, useState } from 'react'
import { youtubePremiumIcon } from '../Utilis/constants'

const PremiumBanner = () => {
  
    const [showAdd, setShowAdd] = useState(true)
    
    const handleshowAddClick = () => {
        setShowAdd(false)
    }

    
     
    return (
        <>
            {showAdd &&
                <div className='flex justify-between mt-24 -mb-24'>
                    <div>
                        <img alt='premium-icon' className="w-36" src={youtubePremiumIcon} />
                        <h1 className='t text-4xl font-bold w-[50%] -mt-6 ml-3'>Buy  YouTube Premium prepaid plans with UPI </h1>
                        <button className='m-3 mt-5 border border-black px-3 py-1 rounded-full'>Get it now</button>
                    </div>
                    <div>
                        <button onClick={handleshowAddClick} className='b bg-gray-500 py-1 px-3 rounded-3xl text-3xl text-white'>X</button>
                    </div>
                </div>

            }  

      </>
          
  )
}

export default PremiumBanner