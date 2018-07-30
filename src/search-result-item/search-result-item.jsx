// Vendor
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions Creators
import { changeTrack, playTrack, pauseTrack } from './track-actions'

// Components
import If from '../utils/if'

class SearchResultItem extends Component {
  constructor(props) {
    super(props)
    this.playTrack = this.playTrack.bind(this)
  }

  playTrack() {
    this.props.changeTrack(this.props.track)
    this.props.playTrack()
  }

  isPlaying() {
    const { track, currentTrack } = this.props
    return currentTrack.data != null
    && currentTrack.data.upload_id === track.upload_id
    && currentTrack.playing
  }

  render() {
    const { track } = this.props
    return (
      <li className="search-results__results-item">
        <div className="search-results__results-item__control">
          { track.upload_id }
        </div>
        <div className="search-results__results-item__control">
          { track.upload_name }
        </div>
        <div className="search-results__results-item__control">
          { track.user_name }
        </div>
        <div className="search-results__results-item__control">
          { track.files[0].file_format_info.ps}
        </div>
        <div className="search-results__results-item__control">
          <If condition={!this.isPlaying()}>
            <button type="button" onClick={() => this.playTrack()}>
              Play
            </button>
          </If>
          <If condition={this.isPlaying()}>
            <button type="button" onClick={() => this.props.pauseTrack()}>
              Pause
            </button>
          </If>
        </div>
      </li>
    )
  }
}

const mapDispathToProps = dispatchEvent => (
  bindActionCreators({ changeTrack, playTrack, pauseTrack }, dispatchEvent)
)

const mapStateToProps = state => ({ currentTrack: state.currentTrack })

export default connect(mapStateToProps, mapDispathToProps)(SearchResultItem)
