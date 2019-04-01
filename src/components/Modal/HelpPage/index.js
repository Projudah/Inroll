import React from 'react'
import Modal from 'react-responsive-modal'
import '../modal.scss'

export default class ModalWindow extends React.Component {
  onCloseModal = () => {
    this.props.handleModalUnmount()
  }

  render() {
    return (
      <div>
        <Modal open={true} onClose={this.onCloseModal} center>
          <h1>Help Page</h1>
          <h2>How do I add classes?</h2>
          <p>
            <ol>
              <li>Click "Add Class" in the sidebar</li>
              <li>Search for class using one of the three methods provided</li>
              <li>Click "Add Class" when desired class and section is found</li>
              <li>Click the "Next" button</li>
              <li>Confirm changes</li>
            </ol>
          </p>
          <h2>How do I drop classes?</h2>
          <p>
            <ol>
              <li>Click "Drop Class" in the sidebar</li>
              <li>Click the class(es) you want to drop in the class </li>
              <li>Click the "Next" button</li>
              <li>Confirm changes</li>
            </ol>
          </p>
          <h2>How do I swap classes?</h2>
          <p>
            <ol>
              <li>Click "Swap Class" in the sidebar</li>
              <li>Search for class using one of the three methods provided</li>
              <li>Click "Add Class" when desired class and section is found</li>
              <li>Click the class you want to drop in the class</li>
              <li>Confirm changes</li>
            </ol>
          </p>
        </Modal>
      </div>
    )
  }
}
