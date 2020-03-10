import React from 'react'

// import { Container } from './styles';

function VideoCinema (props) {
  const style = {
    display: (props.isActive ? 'inline-block' : 'none')
  }
  return (
    <div className='video-cinema' style={style}>
      {props.children}
    </div>
  )
}
export default VideoCinema
