import React, { Component } from 'react'

// Styles
import '../assets/stylesheets/module/search-results.scss'

class SearchResults extends Component {
  render() {
    return (
      <ul className="search-results">
        <li className="search-result">
          <div
            className="search-result-image"
            style={{ backgroundImage: "url('https://i0.wp.com/carimbosestoril.com.br/wp-content/uploads/2015/10/default-placeholder.png')" }}
          />
          <div className="search-result-body">
            <h3> The Show Must Go On </h3>
            <h4> Queen - Innuendo </h4>
          </div>
        </li>
      </ul>
    )
  }
}

export default SearchResults
