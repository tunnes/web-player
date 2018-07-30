import React from 'react'

// Components
import SearchInput from '../search-input/search-input'
import SearchResults from '../search-results/search-results'

// Styles
import '../assets/stylesheets/layout/search-section.scss'

export default () => (
  <div className="search-section">
    <SearchInput />
    <SearchResults />
  </div>
)
