import React from 'react'
import SearchBar from '../SearchBar'

import './navbar.scss'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="title">InRoll</div>
        <div className="search">
          <SearchBar
            toggleSearchClassModal={this.props.toggleSearchClassModal}
          />
        </div>
      </div>
    )
  }
}
export default NavBar
