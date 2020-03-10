import React, { Component } from 'react'
import './App.css'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'
import VideoCinema from './components/VideoCinema'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: {
        img: 'https://storage.coverr.co/thumbnails/coverr-sparks-of-bonfire-1573980240958',
        name: 'Chamas',
        url: 'https://storage.coverr.co/videos/Golden_Gate_Traffic?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgzODAyMTMxfQ.QqtrIiJiybNfxIonfp-VErpdpxB5shAMu2fk99Be4io'
      }
    }
  }

  render () {
    const { state } = this
    return (
      <div className='App'>
        <h1>Video Player React</h1>
        <VideoPlayer video={state.selectedVideo} />
        <VideoList videos={state.videos} />
        <VideoCinema isActive={false} />
      </div>
    )
  }
}

export default App
