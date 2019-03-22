import React from 'react';
import Modal from 'react-responsive-modal';
 
export default class ModalWindow extends React.Component {
  onCloseModal = () => {
    this.props.handleModalUnmount()
  };
 
  render() {
    return (
      <div>
        <Modal open={true} onClose={this.onCloseModal} center>
          <h1>CLASS NAME GOES HERE</h1>
          <ul>
            <li><b>Session:</b> Full Session</li>
            <li><b>Career:</b> Undergraduate</li>
          </ul>
        </Modal>
      </div>
    );
  }
}