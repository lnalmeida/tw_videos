import React, { Component } from 'react'

class VideoPlayer extends Component {
  render () {
    return (
      <div className='video-player'>
        <video
          src='https://storage.coverr.co/videos/Golden_Gate_Traffic?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgzODAyMTMxfQ.QqtrIiJiybNfxIonfp-VErpdpxB5shAMu2fk99Be4io'
          controls autoPlay loop
        />
        <button>[ ]</button>
      </div>
    )
  }
}
export default VideoPlayer
