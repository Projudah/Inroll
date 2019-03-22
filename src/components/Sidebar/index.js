import React from 'react'
import Collapsible from 'react-collapsible';

import './sidebar.scss'

class Sidebar extends React.Component {

	searchCourse(){
		//need to check all the inputs and make sure at least 1 is not empty
	}

	resetCourseName(){
		document.getElementById("courseName").value	= ''
	}

	resetCourseCode(){
		document.getElementById("courseCode").value=''
	}

	myFunction() {
  document.getElementById("myDropdown").toggle("show");
}
  
  render(){
    return(
      <div>
      <div><p><label id = "semester"> Fall Semester</label></p>
      <div className="dropdown">
  <span>Mouse over me</span>
  <div className="dropdown-content">
    <p>Hello World!</p>
  </div>
</div>
      </div>
      <Collapsible trigger="+  Add Class" onOpening={this.props.toggle} onClosing= {this.props.toggle}>
      <div>Fill in 1 of the follwing sections to search</div>
        <Collapsible trigger="Course Code" onClose	={this.resetCourseCode}>
        <label>Enter the Course Code</label><input type="text" placeholder="Course Code" id="courseCode" />
      </Collapsible>
      <Collapsible trigger="Course Name" onClose={this.resetCourseName}>
        <label>Enter the Course Name</label><input type="text" placeholder="Course Name" id="courseName"/>
      </Collapsible>
      <Collapsible trigger="Department/Subject">
        <p><label>Filter one of the following</label></p><p><label> Department</label> <select>
        <option	value="null"></option>
  <option value="Engineering">Engineering</option>
  <option value="Telfer">Telfer</option>
  <option value="Arts">Arts</option>
  <option value="Law">Law</option>
</select></p>

<p><label> Subject</label> <select>
  <option value="AIR">AIR</option>
  <option value="SEG">SEG</option>
  <option value="HOM">HOM</option>
  <option value="FOO">FOO</option>
</select></p>

      <p><label> Level</label> <select>
  <option value="Undergraduate">Undergraduate</option>
  <option value="Graduate">Graduate</option>
  <option value="PHD">PHD</option>
</select></p>
</Collapsible>
<button type="button" onClick={this.searchCourse}>Search</button>
      </Collapsible>
      <label>Delete Class</label>
        <div className="sidebar">
          Hello im the sidebar
          Hello im the sidebar
          Hello im the sidebar
          Hello im the sidebar
          Hello im the sidebar
        </div>
      </div>
    )
  }
}
export default Sidebar