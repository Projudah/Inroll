import React from 'react'
import Modal from 'react-responsive-modal'
import '../modal.scss'
import PointButton from '../../PointButton'

export default class PopupInfo extends React.Component {
  onCloseModal = () => {
    this.props.handleModalUnmount()
  }

  next = () =>{
    this.props.handleModalUnmount()
    this.props.next()
  }

  render() {
    var proceed = ""
    if(this.props.right !== undefined){
            proceed = <PointButton
              name ={this.props.right}
              direction="right hover"
              clicked={this.next}/>
          }
    return (
      <div>
        <Modal open={true} onClose={this.onCloseModal} center>
        <div className = "popup">
          <h1>Conflict</h1>
          <p>
            {this.props.text}
          </p>
          <div className="button">
            <div className = "cancel">
              <PointButton
                  name ={this.props.left}
                  direction="left hover"
                  clicked={this.onCloseModal}/>
            </div>
            <div className = "proceed">
            {proceed}
            </div>
          </div>
        </div>

          
        </Modal>
      </div>
    )
  }
}
