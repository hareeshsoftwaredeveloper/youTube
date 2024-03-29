import React, { useEffect, useState } from 'react'
import { mostPopularVideosApi} from '../Utilis/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  
   const [videos, setVideos]=useState([])
  const getVideos = async () => {
    

     const data = await fetch(mostPopularVideosApi)
     
     const json = await data.json() 
     
     setVideos(json.items)
      
   }

    useEffect(() => {
        getVideos()
    },[])

    return (
      <div className='flex flex-wrap items-start mt-24'>
        {videos.map(video=><Link key={video.id} to={"/watch?v="+video.id}><VideoCard  info={video} /></Link>)}
        
    </div>
  )
}

export default VideoContainer