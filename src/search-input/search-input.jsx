// Vendor Packages
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Action Creators
import { handleSearch, changeQuery } from './search-actions'

// Styles
import '../assets/stylesheets/module/search-input.scss'

class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleKey = this.handleKey.bind(this)
  }

  handleKey(event) {
    if (event.key === 'Enter') this.props.handleSearch(event.target.value)
  }

  render() {
    return (
      <div className="search-input">
        <label htmlFor="search-input" className="search-input__label">
          <input
            type="text"
            placeholder="By track or mixer nickname..."
            value={this.props.query}
            onChange={this.props.changeQuery}
            onKeyUp={this.handleKey}
          />
        </label>
        <button
          type="button"
          className="search-input__button"
          onClick={() => this.props.handleSearch(this.props.query)}
        >
          Search
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
