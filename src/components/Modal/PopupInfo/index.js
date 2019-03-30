import React from 'react'
import Modal from 'react-responsive-modal'
import '../modal.scss'

export default class PopupInfo extends React.Component {
  onCloseModal = () => {
    this.props.handleModalUnmount()
  }

  render() {
    return (
      <div>
        <Modal open={true} onClose={this.onCloseModal} center>
          <h1>Conflict</h1>
          <p>
            {this.props.text}
          </p>
        </Modal>
      </div>
    )
  }
}
