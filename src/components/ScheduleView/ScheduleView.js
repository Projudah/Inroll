import React, {Component} from 'react'
import './ScheduleView.scss'

class ScheduleView extends Component {
  
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

  generateRow = (time, classes) => {
    var rows = []
    var offset = 0

    for (var i = 0; i < 7; i++) {
      var inrange = false
      var found = false
      var collision = false
      var count = 0
      var flag = false
      for (var j = 0; j < classes.length; j++) {
        if (classes[j].Day === i) {
          collision = false

          inrange =
            inrange ||
            (classes[j].Time + classes[j].Length > time &&
              classes[j].Time < time)
          for (var l = 0; l < classes.length; l++) {
            if (
              classes[l].Time + classes[l].Length > time &&
              classes[l].Time <= time &&
              classes[l].Day === i &&
              classes[l].id !== classes[j].id
            ) {
              for (var m = 0; m < classes.length; m++) {
                if (
                  (classes[m].Time + classes[m].Length > classes[l].Time &&
                    classes[m].Time <= classes[l].Time &&
                    classes[m].Day === i &&
                    classes[m].id !== classes[l].id) ||
                  (classes[m].Time + classes[m].Length >=
                    classes[l].Time + classes[l].Length &&
                    classes[m].Time < classes[l].Time + classes[l].Length &&
                    classes[m].Day === i &&
                    classes[m].id !== classes[l].id)
                ) {
                  flag = true
                }
              }

              if (flag) {
                count++
                // console.log("day", i, "time", time, "count", count)
              }
            }
          }
          // if(flag) count++
          if (classes[j].Time === time) {
            for (var k = 0; k < classes.length; k++) {
              collision =
                collision ||
                (classes[k].Time + classes[k].Length > time &&
                  classes[k].Time <= time &&
                  classes[k].Day === i &&
                  classes[k].id !== classes[j].id) ||
                (classes[k].Time + classes[k].Length >=
                  time + classes[j].Length &&
                  classes[k].Time < time + classes[j].Length &&
                  classes[k].Day === i &&
                  classes[k].id !== classes[j].id)
            }
            // console.log(time,i, classes[j].Section,classes[j].Name, "range",inrange,"coll",collision, "count", count)
            var spaned = 2

            if (collision) {
              // offset++
              spaned = 1
            }
            if(classes[j].temp !== undefined){
              rows[classes[j].Day + offset] = (
              <td
                onClick={this.props.toggleSearchClassModal}
                rowSpan={classes[j].Length}
                colSpan={spaned}
                
              ><div className = "temp_div">
              <div className="classEntry_temp">
              <p>
                {classes[j].Name}
                <br />
                {classes[j].Section}
                <br />
                {classes[j].Location}
                </p>
                </div>
              </div></td>
            )
            }else{
              rows[classes[j].Day + offset] = (
              <td
                onClick={this.props.toggleSearchClassModal}
                rowSpan={classes[j].Length}
                colSpan={spaned}
                className="classEntry"
              >
                {classes[j].Name}
                <br />
                {classes[j].Section}
                <br />
                {classes[j].Location}
              </td>
            )
            }
            
            found = true
            if (!collision) {
              break
            }else{
              offset++
            }
          }
        }
      }

      if (!(inrange || found)) {
        rows[i + offset] = <td colSpan="2" />
      } else if (count === 2) {
        offset++
        // console.log("day", i, "time", time, "count", count)
        {/*rows.splice(i + offset, 0, <td colSpan="1" />)*/}
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
          <div className="schedule-web">{this.generateTable()}</div>
          <div className="schedule-mobile">
            THIS IS MOBILE
          </div>
        </div>
        <div className="course-sequence">
          <h1>Recommended Course Sequence</h1>
        </div>
      </div>
    )
  }
}

export default ScheduleView
