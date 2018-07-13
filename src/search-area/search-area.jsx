// Vendor Packages
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Action Creators
import { handleSearch, changeQuery } from './search-actions'

// Styles
import '../assets/stylesheets/module/search-area.scss'

class SearchArea extends React.Component {
  constructor(props) {
    super(props)
    this.handleKey = this.handleKey.bind(this)
    this.instance = null
  }

  handleKey(event) {
    if (event.key === 'Enter') this.props.handleSearch(event.target.value)
  }

  render() {
    return (
      <div className="search-area">
        <label htmlFor="search-input" className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search by track or mixer nickname..."
            value={this.props.query}
            onChange={this.props.changeQuery}
            onKeyUp={this.handleKey}
          />
        </label>
      </div>
    )
  }
}

const mapDispatchToProps = dispatchEvent => (
  bindActionCreators({ handleSearch, changeQuery }, dispatchEvent)
)

const mapStateToProps = state => (
  { query: state.search.query, tracks: state.search.tracks }
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchArea)
