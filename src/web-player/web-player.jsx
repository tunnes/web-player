// Vendor
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import SearchSection from '../search-section/search-section'
import AudioWave from '../audio-wave/audio-wave'
import AudioControl from '../audio-control/audio-control'

// Styles Base
import '../assets/stylesheets/base/reset.scss'
import '../assets/stylesheets/base/typography.scss'

// Styles Layout
import '../assets/stylesheets/layout/app.scss'

// Styles Modifier
import '../assets/stylesheets/state/is-playing.scss'

class WebPlayer extends Component {
  constructor(props) {
    super(props)
    this.getClassModifiers = this.getClassModifiers.bind(this)
  }

  getClassModifiers() {
    let className = ''
    if (this.props.currentTrack.playing) { className = `${className} is-playing` }
    return className
  }

  render() {
    return (
      <div className={`react-component-wrapper ${this.getClassModifiers()}`}>
        <SearchSection />
        <AudioControl />
        <AudioWave />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentTrack: state.currentTrack,
})

export default connect(mapStateToProps, null)(WebPlayer)
