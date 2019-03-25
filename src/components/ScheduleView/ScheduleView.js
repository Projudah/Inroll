import React, { Component } from 'react';
import './ScheduleView.scss'

class ScheduleView extends Component {

	classes = [
			{	Day : 0,
				Length: 3,
				Name: 'SEG3125',
				Location: "Mars",
				Section: "Lecture",
				Time: 2,
				id: 0
			},
			{	Day : 2,
				Length: 3,
				Name: 'SEG3125',
				Location: "Mars",
				Section: "Lecture",
				Time: 2,
				id: 1
			},
			{	Day : 3,
				Length: 6,
				Name: 'SEG3125',
				Location: "Mars",
				Section: "Lab",
				Time: 5,
				id: 2
			},
			{	Day : 1,
				Length: 3,
				Name: 'HOM1234',
				Location: "Snip Center",
				Section: "Lecture",
				Time: 7,
				id: 3
			},
			{	Day : 4,
				Length: 3,
				Name: 'HOM1234',
				Location: "Snip Center",
				Section: "Lecture",
				Time: 4,
				id: 4
			},
			{	Day : 2,
				Length: 6,
				Name: 'HOM1234',
				Location: "Snip Center",
				Section: "Lab",
				Time: 7,
				id: 5
			}
		]
	times =["8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30"
	,"15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"]

	generateRow = (time, classes) =>{

		var rows = []
		var offset = 0


		for(var i=0; i<7; i++){
			var inrange = false;
			var found = false;
			var collision = false
			var count = 0
			var flag = false
			for(var j=0; j<classes.length; j++){
				if(classes[j].Day === i){

					collision = false

					
					inrange = inrange || (((classes[j].Time + classes[j].Length) > time) && ((classes[j].Time) < time))
						for(var l=0; l<classes.length; l++){
							if(((classes[l].Time + classes[l].Length) > time) &&
									((classes[l].Time) <= time) &&
									classes[l].Day === i &&
									classes[l].id !== classes[j].id){
								flag=true
								count++
							}
						}
						// if(flag) count++
					if(classes[j].Time === time){

						for(var k=0; k<classes.length; k++){
							collision = collision || 
							(((classes[k].Time + classes[k].Length) > time) &&
								((classes[k].Time) <= time) &&
								classes[k].Day === i &&
								classes[k].id !== classes[j].id) ||
							(((classes[k].Time + classes[k].Length) >= time+classes[j].Length) &&
								((classes[k].Time) < time+classes[j].Length) &&
								classes[k].Day === i &&
								classes[k].id !== classes[j].id)
						}
						// console.log(time,i, classes[j].Section,classes[j].Name, "range",inrange,"coll",collision)

						if(collision){
							if(!(rows[classes[j].Day]==null)){
								offset++;
							}
							// console.log(rows, offset, classes[j].Name)
							rows[classes[j].Day+offset] = <td rowSpan={classes[j].Length} colSpan="1" className="classEntry">{classes[j].Name}<br/>
							{classes[j].Section}<br/>
							{classes[j].Location}</td>

						}else{
							rows[classes[j].Day+offset] = <td rowSpan={classes[j].Length} colSpan="2"className="classEntry">{classes[j].Name}<br/>
							{classes[j].Section}<br/>
							{classes[j].Location}</td>
						}
						found = true
						if(!collision){
							break
						}
					}
				}
			}
			console.log(count, collision)
			if(!(inrange || found)){
				rows[i+offset] = <td colSpan="2"></td>
			}else if(count===9){
				rows[i+offset] = <td colSpan="1"></td>
			}

		}

		rows = rows.filter(function(val) {
		    return val !== null;
		});
		return(<tr>
				<td colSpan="2" className ="timeRow">{this.times[time]}</td>
				{rows}
			</tr>)
	}

	generateTable = () =>{
		const header = <tbody>
		<tr>
			<th colSpan="2" className='timeCol'>Time</th>
			<th colSpan="2">Monday</th>
			<th colSpan="2">Tuesday</th>
			<th colSpan="2">Wednesday</th>
			<th colSpan="2">Thursday</th>
			<th colSpan="2">Friday</th>
			<th colSpan="2">Saturday</th>
			<th colSpan="2">Sunday</th>
		</tr></tbody>

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
