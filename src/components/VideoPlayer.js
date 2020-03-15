import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Channel } from '../services/EventService'

class VideoPlayer extends Component {
  constructor (props) {
    super(props)

    this.handleToggleCinema = this.handleToggleCinema.bind(this)
    this.handleOnPlay = this.handleOnPlay.bind(this)
    this.handleOnStop = this.handleOnStop.bind(this)

    this.currentTime = 0

    this.videoElement = React.createRef()
  }

  handleToggleCinema () {
    this.handleOnStop()
    Channel.emit('video:toggle-cinema')
  }

  handleOnPlay () {
    this.videoElement.current.currentTime = this.currentTime
  }

  handleOnStop () {
    this.currentTime = this.videoElement.current.currentTime
  }

  componentDidUpdate (prevProps) {
    if (this.props.video.url !== prevProps.video.url) {
      this.currentTime = 0
    }
  }

  render () {
    const { video, container } = this.props
    if (!video.url) {
      return ''
    } else if (!container) {
      return 'Carregando...'
    } else {
      const element = (
        <div className='video-player'>
          <video
            onPlay={this.handleOnPlay}
            onPause={this.handleOnStop}
            src={video.url}
            controls autoPlay loop
            ref={this.videoElement}
          />
          <button onClick={this.handleToggleCinema}>[ ]</button>
        </div>
      )
      return ReactDOM.createPortal(element, container)
    }
  }
}
export default VideoPlayer
