import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'UI', label: 'SEG3125 - User Interface and Analysis' },
  { value: 'HOME', label: 'HOM1234 - Cooking with scissors' },
  { value: 'CHEESE', label: 'FOO3456 - Eating cheese the expert way' },
  { value: 'AIR', label: 'AIR6789 - How to make airplanes'}
];

class SearchBar extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Course code, course name, department"
      />
    )
  }
}
export default SearchBar