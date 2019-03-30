import React, { Component } from 'react';
import './ViewSelectedClasses.scss'

class ViewSelectedClasses extends Component {
  render() {
    return <div className="ViewSel">
            <div className="title-area">
              <h2>AIR6789 - How to make airplanes</h2>
            </div>
            <p>
              <ul>
              	<li><b>Section:</b> A</li>
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
    </div>;
  }
}

export default ViewSelectedClasses;
