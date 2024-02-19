import React from 'react'

const VideoCard = ({ info }) => {
    
    const { snippet, statistics } = info
    const {channelTitle, thumbnails, title}=snippet
  return (
      <div className='p-2 m-2 shadow-sm  mb-3 cursor-pointer'>
          <img className=' w-72 rounded-xl' alt="thumnail" src={thumbnails.medium.url} />
          <ul>
              <li className='font-bold py-2 w-72'>{title}</li>
              <li>{channelTitle}</li>
              <li>{statistics.viewCount > 1000000 ? ((statistics.viewCount / 1000000).toFixed(1) + "M") : ((statistics.viewCount) > 1000 ? ((statistics.viewCount / 1000).toFixed(2) + "K") : statistics.viewCount)}  views</li>
          </ul>
    </div>
  )
}

export default VideoCard