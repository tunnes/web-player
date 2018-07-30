// Vendor Packages
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import SearchResultItem from '../search-result-item/search-result-item'

// Styles
import '../assets/stylesheets/module/search-results.scss'

class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem(track) {
    return (
      <SearchResultItem track={track} key={track.upload_id} />
    )
  }

  render() {
    return (
      <div className="search-results">
        <ul className="search-results__results-list">
          { this.props.tracks.map(track => this.renderItem(track)) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => (
  { tracks: state.search.tracks }
)

export default connect(mapStateToProps)(SearchResults)
