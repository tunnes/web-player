// Vendor
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Style
import '../assets/stylesheets/module/audio-control.scss'

// SVG
import IconPlay from '../assets/images/play.svg'
import IconNext from '../assets/images/fast-forward.svg'

class AudioControl extends Component {
  render() {
    return !this.props.currentTrack.playing ? null : (
      <div className="audio-control">
        <div className="audio-control__titles">
          <h4>
            { this.props.currentTrack.data.user_name }
          </h4>
          <h2>
            { this.props.currentTrack.data.upload_name }
          </h2>
        </div>
        <div className="audio-control__controls">
          buttons goes here
          <IconPlay width={40} height={40} />
          <IconNext width={80} height={40} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentTrack: state.currentTrack,
})

export default connect(mapStateToProps, null)(AudioControl)
