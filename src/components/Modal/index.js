import React from 'react';
import Modal from 'react-responsive-modal';
 
export default class ModalWindow extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} center>
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