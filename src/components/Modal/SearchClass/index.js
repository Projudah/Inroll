import React from 'react'
import Modal from 'react-responsive-modal'
import '../modal.scss'

export default class ModalWindow extends React.Component {
  onCloseModal = () => {
    this.props.handleModalUnmount()
  }

  addRight = () => {
    this.onCloseModal()
    this.props.toggle(2)
    this.props.turnOffSidebar()
  }

  addFail = () =>{
    this.onCloseModal()
    this.props.toggle(6)
    this.props.turnOffSidebar()
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
            <p>
              <ul>
                <li><b>Instructor:</b> Justin Bieber</li>
                <li><b>Start &amp; End Date</b> Jan. 7 - Apr. 7, 2019</li>
                <li><b>Seats Available</b> 30</li>
              </ul>
            </p>
            <table class="table">
              <tr>
                <th>Type</th>
                <th>Days &amp; Time</th>
                <th>Location</th>
              </tr>
              <tr>
                <td>Lab</td>
                <td>Mon. 7:00pm-10:00pm</td>
                <td>UCU 0101</td>
              </tr>
              <tr>
                <td>Lecture</td>
                <td>Thurs. 2:00pm-4:30pm</td>
                <td>SITE 0101</td>
              </tr>
              <tr>
                <td>Lecture</td>
                <td>Fri. 11:30am-1:00pm</td>
                <td>SITE 0101</td>
              </tr>
            </table>
            <div className="title-area">
              <h2>Section B</h2>
              <button onClick={this.addFail}>Add Class</button>
            </div>
            <p>
              <ul>
                <li><b>Instructor:</b> Barack Obama</li>
                <li><b>Start &amp; End Date</b> Jan. 7 - Apr. 7, 2019</li>
                <li><b>Seats Available</b> 30</li>
              </ul>
            </p>
            <table class="table">
              <tr>
                <th>Type</th>
                <th>Days &amp; Time</th>
                <th>Location</th>
              </tr>
              <tr>
                <td>Lab</td>
                <td>Mon. 7:00pm-10:00pm</td>
                <td>UCU 0101</td>
              </tr>
              <tr>
                <td>Lecture</td>
                <td>Thurs. 2:00pm-4:30pm</td>
                <td>SITE 0101</td>
              </tr>
              <tr>
                <td>Lecture</td>
                <td>Fri. 11:30am-1:00pm</td>
                <td>SITE 0101</td>
              </tr>
            </table>
          </div>
        </Modal>
      </div>
    )
  }
}
