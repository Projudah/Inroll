import React from 'react'
import SearchBar from '../SearchBar'

import './navbar.scss'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="title">
          <i className="fas fa-graduation-cap" />
          InRoll
        </div>
        <div className="search">
          <SearchBar
            toggleSearchClassModal={this.props.toggleSearchClassModal}
          />
        </div>
        <div className="help-page">
          <i
            className="far fa-question-circle"
            onClick={this.props.toggleHelpPage}
          />
        </div>
      </div>
    )
  }
}
export default NavBar
