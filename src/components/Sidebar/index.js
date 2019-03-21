import React from 'react'

import './sidebar.scss'

class Sidebar extends React.Component {
  
  render(){
    return(
      <div>

        <div className="sidebar">
          Hello im the sidebar
          Hello im the sidebar
          Hello im the sidebar
          Hello im the sidebar
          Hello im the sidebar
        </div>
        <div onClick = {this.props.toggle}>Button</div>
      </div>
    )
  }
}
export default Sidebar