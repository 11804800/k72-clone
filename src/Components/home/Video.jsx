import React from 'react'

function Video() {
  return (
    <div className='w-full h-full'>
        <video src="/video.mp4" loop autoPlay muted className='w-full h-full object-cover'/>
    </div>
  )
}

export default Video