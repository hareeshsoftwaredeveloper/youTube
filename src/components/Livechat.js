import React, { useEffect, useRef, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utilis/chatSlice'
import { randomMessageGenerator, randomNameGenerate } from '../Utilis/helper'


const Livechat = () => {

    const dispatch = useDispatch()

    const [liveMessage, setLiveMessage]=useState("")

    const chatMessages=useSelector(store=>store.chat.messages)
    
    useEffect(() => {
        const intervalId = setInterval(() => {
        
            dispatch(addMessage({name:randomNameGenerate(), message:randomMessageGenerator(15)}))
         }, 1500)
        
        return ()=>clearInterval(intervalId)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addMessage({ name: "Hareesh", message: liveMessage }))
        setLiveMessage("")
    }
    
    

    return (
      <>
      <div className='ml-2 mt-1 w-[350px] p-4 border border-black overflow-y-scroll  h-[400px] bg-slate-100 rounded-lg flex flex-col-reverse'>
          {chatMessages.map((message, index)=><ChatMessage key={index} name={message.name} message={message.message+"🤘"} />)}
          {/* Dont use indexs as keys */}
            </div>
      <form onSubmit={handleSubmit} className='w-full border border-black p-2 ml-2'>
                <input onChange={e=>setLiveMessage(e.target.value)} value={liveMessage} type='text' className='border px-2 border-gray-400 w-[250px]' />
                <button className='b bg-red-500 text-white px-2 py-1 text-[14px] ml-2'>Send</button>
     </form>
    </> 
          
  )
}

export default Livechat