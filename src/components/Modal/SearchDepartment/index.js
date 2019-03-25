import React from 'react'
import Modal from 'react-responsive-modal'
import '../modal.scss'

export default class ModalWindow extends React.Component {
  onCloseModal = () => {
    this.props.handleModalUnmount()
  }

  next = () => {
    this.props.handleModalUnmount()
    this.props.toggleSearchClassModal2()
  }

  render() {
    return (
      <div>
        <Modal open={true} onClose={this.onCloseModal} center>
          <div className="modalDiv"><h1>Search Results</h1>
                    <table class="table">
                      <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th> </th>
                      </tr>
                      <tr>
                        <td>SEG3125</td>
                        <td>User Interface and Analysis</td>
                        <td>
                          <button onClick={this.next}>View Class</button>
                        </td>
                      </tr>
                      <tr>
                        <td>HOM1234</td>
                        <td>Cooking with Scissors</td>
                        <td>
                          <button>View Class</button>
                        </td>
                      </tr>
                      <tr>
                        <td>FOO3456</td>
                        <td>Eating Cheese the Expert Way</td>
                        <td>
                          <button>View Class</button>
                        </td>
                      </tr>
                      <tr>
                        <td>AIR6789</td>
                        <td>How to Make Airplanes</td>
                        <td>
                          <button>View Class</button>
                        </td>
                      </tr>
                    </table></div>
        </Modal>
      </div>
    )
  }
}
