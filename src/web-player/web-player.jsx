import React from 'react'

// Components
import Navbar from '../nav/navbar'
import SearchArea from '../search-area/search-area'
import SearchResults from '../search-results/search-results'

// Styles Base
import '../assets/stylesheets/base/reset.scss'
import '../assets/stylesheets/base/typography.scss'
// Styles Layout
import '../assets/stylesheets/layout/app.scss'

export default () => (
  <div className="react-component-wrapper">
    <Navbar />
    <SearchArea />
    <SearchResults />
  </div>
)
