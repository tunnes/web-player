import React from 'react'
import '../assets/scss/search-area.scss'

export default props => (
  <div className="search-area">
    <label htmlFor="search-input" className="search-input-wrapper">
      <input type="text" className="search-input" placeholder='Search by tracks, albuns or curators... '/>
    </label>
  </div>
)