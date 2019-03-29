import React from 'react'
import './navbar.scss'

class NavBarMobile extends React.Component {
  render() {
    return (
      <div className="navbar-mobile">
        <div className="hamburger-menu">
          <i class="fas fa-bars"></i>
        </div>
        <div className="title">
          <i className="fas fa-graduation-cap" />
          InRoll
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
export default NavBarMobile
