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
    this.inlineVideo = React.createRef()
    this.cinemaVideo = React.createRef()

    this.selectVideo = this.selectVideo.bind(this)
    this.toggleCinema = this.toggleCinema.bind(this)

    this.state = {
      videos: [],
      selectedVideo: {},
      videoContainerElement: this.inlineVideo
    }
  }

  async componentDidMount () {
    const videos = await VideoService.list()
    this.setState({ videos })
    Channel.on('video:select', this.selectVideo)
    Channel.on('video:toggle-cinema', this.toggleCinema)
  }

  toggleCinema () {
    const currentContainer = this.state.videoContainerElement
    const newContainer = currentContainer === this.inlineVideo ? this.cinemaVideo : this.inlineVideo
    this.setState({
      videoContainerElement: newContainer
    })
  }

  componentWillUnmount () {
    Channel.removeListener('video:select', this.selectVideo) 
    Channel.removeListener('video:toggle-cinema', this.toggleCinema)

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
        <div>
          <h1>Video Player React</h1>
        </div>
        <VideoPlayer video={state.selectedVideo} container={state.videoContainerElement.current} />
        <VideoInline>
          <div ref={this.inlineVideo} />
        </VideoInline>
        <VideoList videos={state.videos} />
        <VideoCinema isActive={state.videoContainerElement === this.cinemaVideo}>
          <div ref={this.cinemaVideo} />
        </VideoCinema>
      </div>
    )
  }
}

export default App
