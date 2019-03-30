import React, {Component} from 'react'
import './DropScheduleView.scss'

class DropScheduleView extends Component {
  
  times = [
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
  ]

  drop(elname){
    var el = document.getElementsByClassName(elname)
    for(var i=0; i<el.length; i++){
      if(!el[i].className.includes('selected')){
        el[i].className = 'selected '+elname
      }else{
        el[i].className = 'classEntry '+elname
      }
    }

    var find = document.getElementsByClassName('selected')
    if(find.length !== 0){
      this.props.toggle(8)
    }else{
      this.props.toggle(7)
    }
    
  }

  generateRow = (time, classes) => {
    var rows = []

    for (var i = 0; i < 7; i++) {

      var found = false
      var inrange= false

      for (var j = 0; j < classes.length; j++) {
        if (classes[j].Day === i) {

          if (classes[j].Time === time) {

            rows[classes[j].Day] = (
              <td
                  onClick={this.drop.bind(this, classes[j].Name)}
                  rowSpan={classes[j].Length}
                  colSpan="2">
                  <div className = "temp_div">
                    <div className={"classEntry "+ classes[j].Name}>
                      <p>
                        {classes[j].Name}
                        <br />
                        {classes[j].Section}
                        <br />
                        {classes[j].Location}
                      </p>
                    </div>
                </div>
              </td>
            )
            
            found = true
            break
          }

          inrange = ((classes[j].Time + classes[j].Length) > time) && ((classes[j].Time) < time)
          if(inrange){
            break;
          }

        }
      }

      if(!(inrange || found)){
        rows[i] = <td colSpan="2" />
      }
    }

    rows = rows.filter(function(val) {
      return val !== null
    })
    return (
      <tr>
        <td colSpan="2" className="timeRow">
          {this.times[time]}
        </td>
        {rows}
      </tr>
    )
  }

  generateTable = () => {
    const header = (
      <tbody>
        <tr>
          <th colSpan="2" className="timeCol">
            Time
          </th>
          <th colSpan="2">Monday</th>
          <th colSpan="2">Tuesday</th>
          <th colSpan="2">Wednesday</th>
          <th colSpan="2">Thursday</th>
          <th colSpan="2">Friday</th>
          <th colSpan="2">Saturday</th>
          <th colSpan="2">Sunday</th>
        </tr>
      </tbody>
    )

    var rows = []
    for (var i = 0; i < 28; i++) {
      rows.push(this.generateRow(i, this.classes))
    }

    return (
      <table>
        {header}
        {rows}
      </table>
    )
  }

  generateDaySchedule = (day) =>{
    var classList = []
    for(var i=0; i < this.classes.length; i++){
      if(this.classes[i].Day == day){
        classList.push(this.classes[i])
      }
    }

    if (classList.length != 0){
      classList.sort(function(a,b){
        return a.Time - b.Time
      })

      var html = classList.map((field, index) => (
        <div className={field.temp ? "class-temp" : "class"} onClick={this.props.toggleSearchClassModal}>
          <div className="class-title">{field.Name}</div>
          <div className="time">{this.times[field.Time]} - {this.times[field.Time + field.Length]}</div>
          <div className="location">{field.Location}</div>
          <div className="type">{field.Section}</div>
        </div>
      ))

      return html
    }else{
      return <div className="class">No classes</div>
    }
  }

  render() {

    switch(this.props.scheduleState){
    case "ADD_WORKS":
      this.classes = 
      [{
        Day: 0,
        Length: 3,
        Name: 'SEG3125',
        Location: 'Mars',
        Section: 'Lecture',
        Time: 9,
        id: 0,
      },
      {
        Day: 2,
        Length: 3,
        Name: 'SEG3125',
        Location: 'Mars',
        Section: 'Lecture',
        Time: 6,
        id: 1,
      },
      {
        Day: 4,
        Length: 3,
        Name: 'SEG3125',
        Location: 'Mars',
        Section: 'Lab',
        Time: 0,
        id: 2,
      },
      {
        Day: 1,
        Length: 6,
        Name: 'FOO3456',
        Location: 'Snip Center',
        Section: 'Lecture',
        Time: 21,
        id: 3,
      },
      {
        Day: 3,
        Length: 3,
        Name: 'FOO3456',
        Location: 'Snip Center',
        Section: 'Lab',
        Time: 8,
        id: 4,
      },
      {
        Day: 4,
        Length: 3,
        Name: 'AIR6789',
        Location: 'Cloud 9',
        Section: 'Lecture',
        Time: 6,
        id: 5,
        temp: true
      },
      {
        Day: 3,
        Length: 3,
        Name: 'AIR6789',
        Location: 'Cloud 9',
        Section: 'Lecture',
        Time: 11,
        id: 6,
        temp: true
      },
      {
        Day: 0,
        Length: 6,
        Name: 'AIR6789',
        Location: 'Cloud 9',
        Section: 'Lab',
        Time: 21,
        id: 7,
        temp: true
      }
      ]
      break
    case "ADD_DONE":
      this.classes = 
      [{
        Day: 0,
        Length: 3,
        Name: 'SEG3125',
        Location: 'Mars',
        Section: 'Lecture',
        Time: 9,
        id: 0,
      },
      {
        Day: 2,
        Length: 3,
        Name: 'SEG3125',
        Location: 'Mars',
        Section: 'Lecture',
        Time: 6,
        id: 1,
      },
      {
        Day: 4,
        Length: 3,
        Name: 'SEG3125',
        Location: 'Mars',
        Section: 'Lab',
        Time: 0,
        id: 2,
      },
      {
        Day: 1,
        Length: 6,
        Name: 'FOO3456',
        Location: 'Snip Center',
        Section: 'Lecture',
        Time: 21,
        id: 3,
      },
      {
        Day: 3,
        Length: 3,
        Name: 'FOO3456',
        Location: 'Snip Center',
        Section: 'Lab',
        Time: 8,
        id: 4,
      },
      {
        Day: 4,
        Length: 3,
        Name: 'AIR6789',
        Location: 'Cloud 9',
        Section: 'Lecture',
        Time: 6,
        id: 5
      },
      {
        Day: 3,
        Length: 3,
        Name: 'AIR6789',
        Location: 'Cloud 9',
        Section: 'Lecture',
        Time: 11,
        id: 6
      },
      {
        Day: 0,
        Length: 6,
        Name: 'AIR6789',
        Location: 'Cloud 9',
        Section: 'Lab',
        Time: 21,
        id: 7
      }
      ]
      break
    case "ADD_FAILS":
      this.classes = 
      [{
        Day: 0,
        Length: 3,
        Name: 'SEG3125',
        Location: 'Mars',
        Section: 'Lecture',
        Time: 9,
        id: 0,
      },
      {
        Day: 2,
        Length: 3,
        Name: 'SEG3125',
        Location: 'Mars',
        Section: 'Lecture',
        Time: 6,
        id: 1,
      },
      {
        Day: 4,
        Length: 3,
        Name: 'SEG3125',
        Location: 'Mars',
        Section: 'Lab',
        Time: 0,
        id: 2,
      },
      {
        Day: 1,
        Length: 6,
        Name: 'FOO3456',
        Location: 'Snip Center',
        Section: 'Lecture',
        Time: 21,
        id: 3,
      },
      {
        Day: 3,
        Length: 3,
        Name: 'FOO3456',
        Location: 'Snip Center',
        Section: 'Lab',
        Time: 8,
        id: 4,
      },
      {
        Day: 0,
        Length: 3,
        Name: 'HOM1234',
        Location: 'Snip Center',
        Section: 'Lecture',
        Time: 9,
        id: 5,
        temp: true
      },
      {
        Day: 2,
        Length: 3,
        Name: 'HOM1234',
        Location: 'Snip Center',
        Section: 'Lecture',
        Time: 12,
        id: 6,
        temp: true
      },
      {
        Day: 2,
        Length: 3,
        Name: 'HOM1234',
        Location: 'Snip Center',
        Section: 'Lab',
        Time: 15,
        id: 7,
        temp: true
      }
      ]
      break
    default:
      this.classes = 
      [{
        Day: 0,
        Length: 3,
        Name: 'SEG3125',
        Location: 'Mars',
        Section: 'Lecture',
        Time: 9,
        id: 0,
      },
      {
        Day: 2,
        Length: 3,
        Name: 'SEG3125',
        Location: 'Mars',
        Section: 'Lecture',
        Time: 6,
        id: 1,
      },
      {
        Day: 4,
        Length: 3,
        Name: 'SEG3125',
        Location: 'Mars',
        Section: 'Lab',
        Time: 0,
        id: 2,
      },
      {
        Day: 1,
        Length: 6,
        Name: 'FOO3456',
        Location: 'Snip Center',
        Section: 'Lecture',
        Time: 21,
        id: 3,
      },
      {
        Day: 3,
        Length: 3,
        Name: 'FOO3456',
        Location: 'Snip Center',
        Section: 'Lab',
        Time: 8,
        id: 4,
      }]
  }
    return(
      <div>
      <div className = "Viewtitle">{this.props.viewTitle}</div>
        <div className="schedule-container">
          <div className="dropschedule-web">{this.generateTable()}</div>
          <div className="schedule-mobile">
            <h1>Class schedule</h1>
            <h2>Monday</h2>
            <div id="monday" className="schedule-block">{this.generateDaySchedule(0)}</div>
            <h2>Tuesday</h2>
            <div id="tuesday" className="schedule-block">{this.generateDaySchedule(1)}</div>
            <h2>Wednesday</h2>
            <div id="wednesday" className="schedule-block">{this.generateDaySchedule(2)}</div>
            <h2>Thursday</h2>
            <div id="thursday" className="schedule-block">{this.generateDaySchedule(3)}</div>
            <h2>Friday</h2>
            <div id="friday" className="schedule-block">{this.generateDaySchedule(4)}</div>
            <h2>Saturday</h2>
            <div id="saturday" className="schedule-block">{this.generateDaySchedule(5)}</div>
            <h2>Sunday</h2>
            <div id="sunday" className="schedule-block">{this.generateDaySchedule(6)}</div>
          </div>
        </div>
        <div className="course-sequence">
          <h1>Recommended Course Sequence</h1>
          Click the course name to add course
          <ul>
            <div className="active-link">
              <li onClick={this.props.toggleSearchClassModal}>SEG3125 - User Interface and User Analysis</li>
              <li  onClick={this.props.toggleSearchClassModal}>FOO3456 - Eating cheese the expert way</li>
            </div>
            <li> Elective *</li>
            <li> Elective *</li>
            <li> Elective *</li>
          </ul>
          <i>* any class can be used. Add a class by clicking the "Add Class" in the sidebar</i>
        </div>
      </div>
    )
  }
}

export default DropScheduleView
