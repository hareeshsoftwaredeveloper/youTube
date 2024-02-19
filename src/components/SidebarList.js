import React from 'react'

const SidebarList = ({youList, name}) => {
    
    return (
    <div className='my-4'>
            <h1 className='my-2 text-lg font-semibold'>{name}</h1>    
      <ul>
        {youList.map(each => (
          <li key={each.name} className='flex items-center'>
                <img alt={each.name} className='h-5' src={each.icon} /> 
                <h1 className='mx-8 my-2 text-[14px] '>{each.name }</h1>
          </li>
        ))}   

            </ul>
      <hr/>
    </div>
  )
}

export default SidebarList