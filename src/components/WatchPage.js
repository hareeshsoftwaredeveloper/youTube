import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utilis/sideBarSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import Livechat from './Livechat'

const WatchPage = () => {
    
    const [searchParams] = useSearchParams()
    

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(closeMenu())
    },[])
    return (
      <div className='flex flex-col '>
        <div className='flex '>
          <div>
            <iframe width="800" height="400" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className=''>
            <Livechat/>
          </div>
        </div>
        <div>
          <CommentsContainer/>
        </div>
      </div>
  )
}

export default WatchPage