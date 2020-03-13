import React, { Component } from 'react'
import './App.css'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'
import VideoCinema from './components/VideoCinema'
import VideoInline from './components/VideoInline'
import { VideoService } from './services/VideoService'
import { Channel } from './services/EventService'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: {}
    }
    this.inlineVideo = React.createRef()
    this.cinemaVideo = React.createRef()

    this.selectVideo = this.selectVideo.bind(this)
  }

  async componentDidMount () {
    const videos = await VideoService.list()
    this.setState({ videos })
    Channel.on('video:select', this.selectVideo)
  }

  componentWillUnmount () {
    Channel.removeListener('video:select', this.selectVideo)
  }

  selectVideo (video) {
    this.setState({
      selectedVideo: video
    })
  }

  render () {
    const { state } = this
    return (
      <div className='App'>
        <h1>Video Player React</h1>
        <VideoPlayer video={state.selectedVideo} />
        <VideoInline>
          <div ref={this.inlineVideo} />
        </VideoInline>
        <VideoList videos={state.videos} />
        <VideoCinema isActive={false}>
          <div ref={this.cinemaVideo} />
        </VideoCinema>
      </div>
    )
  }
}

export default App
