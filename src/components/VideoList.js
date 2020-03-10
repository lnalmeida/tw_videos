import React from 'react'

function VideoList () {
  return (
    <ul className='video-list'>
      <li className='video'>
        <img src='https://storage.coverr.co/thumbnails/coverr-sparks-of-bonfire-1573980240958' alt='Chamas' />
        <p>Chamas</p>
      </li>
      <li className='video'>
        <img src='https://storage.coverr.co/thumbnails/coverr-mirror-road-view-1575200654885' alt='Retrovisor' />
        <p>Retrovisor</p>
      </li>
      <li className='video'>
        <img src='https://storage.coverr.co/thumbnails/Golden_Gate_Traffic' alt='Golden Gate' />
        <p>Golden Gate</p>
      </li>
    </ul>
  )
}

export default VideoList
