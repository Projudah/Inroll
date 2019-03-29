import React from 'react'
import Modal from 'react-responsive-modal'
import '../modal.scss'

export default class ModalWindow extends React.Component {
  onCloseModal = () => {
    this.props.handleModalUnmount()
  }

  addRight = () => {
    this.props.toggle(2)
    this.onCloseModal()
  }

  render() {
    return (
      <div>
        <Modal open={true} onClose={this.onCloseModal} center>
          <div className="modalDiv">
            {' '}
            <h1>AIR6789 - How to make airplanes</h1>
            <ul>
              <li>
                <b>Session:</b> Full Session
              </li>
              <li>
                <b>Career:</b> Undergraduate
              </li>
              <li>
                <b>Pre-requisites:</b> AIR4567, AIR2345
              </li>
              <li>
                <b>Description:</b> Learn to create an airplane out of paper,
                metal, rocks, and candy. This course focuses on how to create
                aero dynamic planes and building airplanes that will last for
                the long-term.
              </li>
            </ul>
            <div className="title-area">
              <h2>Section A</h2>
              <button onClick={this.addRight}>Add Class</button>
            </div>
            <table class="table">
              <tr>
                <th>Instructor</th>
                <th>Type</th>
                <th>Days &amp; Time</th>
                <th>Start &amp; End Date</th>
                <th>Seats Available</th>
              </tr>
              <tr>
                <td>Justin Bieber</td>
                <td>Lab</td>
                <td>Mon. 7:00pm-10:00pm</td>
                <td>Jan. 7 - Apr. 7, 2019</td>
                <td>30</td>
              </tr>
              <tr>
                <td />
                <td>Lecture</td>
                <td>Thurs. 2:00pm-4:30pm</td>
                <td>Jan. 7 - Apr. 7, 2019</td>
                <td> </td>
              </tr>
              <tr>
                <td />
                <td>Lecture</td>
                <td>Fri. 11:30am-1:00pm</td>
                <td>Jan. 7 - Apr. 7, 2019</td>
                <td> </td>
              </tr>
            </table>
            <div className="title-area">
              <h2>Section B</h2>
              <button onClick={this.addRight}>Add Class</button>
            </div>
            <table class="table">
              <tr>
                <th>Instructor</th>
                <th>Type</th>
                <th>Days &amp; Time</th>
                <th>Start &amp; End Date</th>
                <th>Seats Available</th>
              </tr>
              <tr>
                <td>Barack Obama</td>
                <td>Lab</td>
                <td>Mon. 7:00pm-10:00pm</td>
                <td>Jan. 7 - Apr. 7, 2019</td>
                <td>30</td>
              </tr>
              <tr>
                <td />
                <td>Lecture</td>
                <td>Thurs. 2:00pm-4:30pm</td>
                <td>Jan. 7 - Apr. 7, 2019</td>
                <td> </td>
              </tr>
              <tr>
                <td />
                <td>Lecture</td>
                <td>Fri. 11:30am-1:00pm</td>
                <td>Jan. 7 - Apr. 7, 2019</td>
                <td> </td>
              </tr>
            </table>
          </div>
        </Modal>
      </div>
    )
  }
}
