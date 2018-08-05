// Vendor
import React, { Component } from 'react'
import { connect } from 'react-redux'
import WaveSurfer from 'wavesurfer.js'

// Styles
import '../assets/stylesheets/module/audio-wave.scss'

// Config
import AudioWaveOptions from './options.json'

class AudioWave extends Component {
  constructor(props) {
    super(props)
    this.waveSurfer = null
    this.audioPromise = null
    this.updateCurrentAudio = this.updateCurrentAudio.bind(this)
  }

  componentDidMount() {
    this.wavesurfer = WaveSurfer.create(AudioWaveOptions)
  }

  updateCurrentAudio() {
    const { currentTrack } = this.props
    if (currentTrack.playing && currentTrack.data !== null) {
      this.wavesurfer.load(currentTrack.data.download_url)
      // this.audioPromise = this.wavesurfer.play()
    } else if (!currentTrack.playing && currentTrack.data !== null) {
      // this.audioPromise.then(() => this.wavesurfer.pause())
    }
  }

  render() {
    this.updateCurrentAudio()
    return (
      <div className="audio-wave">
        <div id="waveform" className="audio-wave__time-line" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentTrack: state.currentTrack,
})

export default connect(mapStateToProps, null)(AudioWave)
