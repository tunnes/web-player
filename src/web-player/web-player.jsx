// Vendor
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import SearchSection from '../search-section/search-section'

// Styles Base
import '../assets/stylesheets/base/reset.scss'
import '../assets/stylesheets/base/typography.scss'

// Styles Layout
import '../assets/stylesheets/layout/app.scss'

class WebPlayer extends Component {
  constructor(props) {
    super(props)
    this.audio = new Audio()
    this.audioPromise = null
    this.updateCurrentAudio = this.updateCurrentAudio.bind(this)
  }

  updateCurrentAudio() {
    const { currentTrack } = this.props
    if (currentTrack.playing && currentTrack.data !== null) {
      this.audio.src = currentTrack.data.download_url
      this.audioPromise = this.audio.play()
    } else if (!currentTrack.playing && currentTrack.data !== null) {
      this.audioPromise.then(() => this.audio.pause())
    }
  }

  render() {
    // this.updateCurrentAudio()
    return (
      <div className="react-component-wrapper">
        <SearchSection />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentTrack: state.currentTrack,
})

export default connect(mapStateToProps, null)(WebPlayer)
