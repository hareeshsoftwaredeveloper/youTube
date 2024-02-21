import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
          <img alt="user-icon" className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIz1RVkcNo4eZZBjE4_UOPUXYzc0Hh4AunmA&usqp=CAU" />  
          <span className='px-2 font-bold'>{name}</span>
          <span>{message}</span>
    </div>
  )
}

export default ChatMessage