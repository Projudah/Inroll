import React, { Component } from 'react';
import './ViewSwappedClasses.scss'

class ViewSwappedClasses extends Component {
  render() {
    return <div className="ViewSwa">
            <div className = "Viewtitle">View Selection</div>
            <div className="title-area">
              <h2>Dropping</h2><br/><h3>SEG3125 - User Interface and Analysis</h3>
            </div>
            <p>
              <ul>
              	<li><b>Section:</b> A</li>
                <li><b>Instructor:</b> Miguel Lionel</li>
                <li><b>Start &amp; End Date</b> Jan. 7 - Apr. 7, 2019</li>
                <li><b>Seats Available</b> 69</li>
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
                <td>SCS 0101</td>
              </tr>
              <tr>
                <td>Lecture</td>
                <td>Thurs. 2:00pm-4:30pm</td>
                <td>SCS 0101</td>
              </tr>
              <tr>
                <td>Lecture</td>
                <td>Fri. 11:30am-1:00pm</td>
                <td>SCS 0101</td>
              </tr>
            </table>
            <div className="title-area">
              <h2>Adding</h2><br/><h3>HOM1234 - Cooking With Scissors</h3>
            </div>
            <p>
              <ul>
                <li><b>Section:</b> A+</li>
                <li><b>Instructor:</b> Cristiano Garzon</li>
                <li><b>Start &amp; End Date</b> Jan. 7 - Apr. 7, 2019</li>
                <li><b>Seats Available</b> 420</li>
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
                <td>MNT 0101</td>
              </tr>
              <tr>
                <td>Lecture</td>
                <td>Thurs. 2:00pm-4:30pm</td>
                <td>FSS 0101</td>
              </tr>
              <tr>
                <td>Lecture</td>
                <td>Fri. 11:30am-1:00pm</td>
                <td>STM 0101</td>
              </tr>
            </table>
    </div>;
  }
}

export default ViewSwappedClasses;
