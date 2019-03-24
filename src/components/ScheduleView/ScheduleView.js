import React, { Component } from 'react';
import './ScheduleView.scss'

class ScheduleView extends Component {

	classes = [
			{	Day : 0,
				Length: 3,
				Name: 'SEG3125',
				Location: "Mars",
				Section: "Lecture",
				Time: 2
			},
			{	Day : 2,
				Length: 3,
				Name: 'SEG3125',
				Location: "Mars",
				Section: "Lecture",
				Time: 0
			},
			{	Day : 3,
				Length: 6,
				Name: 'SEG3125',
				Location: "Mars",
				Section: "Lab",
				Time: 5
			},
			{	Day : 1,
				Length: 3,
				Name: 'HOM1234',
				Location: "Snip Center",
				Section: "Lecture",
				Time: 7
			},
			{	Day : 4,
				Length: 3,
				Name: 'HOM1234',
				Location: "Snip Center",
				Section: "Lecture",
				Time: 4
			},
			{	Day : 2,
				Length: 6,
				Name: 'HOM1234',
				Location: "Snip Center",
				Section: "Lab",
				Time: 7
			}
		]
	times =["8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30"
	,"15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"]

	generateRow = (time, classes) =>{

		var rows = [0,0,0,0,0,0,0]

		for(var i=0; i<7; i++){
			var inrange = false;
			var found = false;
			for(var j=0; j<classes.length; j++){
				if(classes[j].Day === i){

					if(classes[j].Time === time){
						rows[classes[j].Day] = <td rowSpan={classes[j].Length} className="classEntry">{classes[j].Name}<br/>
						{classes[j].Section}<br/>
						{classes[j].Location}</td>
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
				rows[i] = <td></td>
			}

		}

		rows = rows.filter(function(val) {
		    return val !== 0;
		});
		return(<tr>
				<td>{this.times[time]}</td>
				{rows}
			</tr>)
	}

	generateTable = () =>{
		const header = <tr>
			<th className='timeCol'>Time</th>
			<th>Monday</th>
			<th>Tuesday</th>
			<th>Wednesday</th>
			<th>Thursday</th>
			<th>Friday</th>
			<th>Saturday</th>
			<th>Sunday</th>
		</tr>

		var rows = []
		for(var i=0; i<24; i++){
			rows.push(this.generateRow(i,this.classes))
		}

		return (<table>
				{header}
				{rows}
				</table>)
	}


	render() {
		return (
			<div className='schedule'>
				{this.generateTable()}
			</div>
			);
	}
}

export default ScheduleView;
