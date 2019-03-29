import React from 'react'
import Select from 'react-select'

const options = [
  {value: 'UI', label: 'SEG3125 - User Interface and Analysis'},
  {value: 'HOME', label: 'HOM1234 - Cooking with scissors'},
  {value: 'CHEESE', label: 'FOO3456 - Eating cheese the expert way'},
  {value: 'AIR', label: 'AIR6789 - How to make airplanes'},
]

const customStyles = {
  option: (base, state) => ({
    ...base,
    background: state.isSelected ? "#99162c": "white",
    color: state.isSelected ? "white" : "black",
    '&:hover': {
      backgroundColor: "#bb1a35",
      color: "white"
    }
  })
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
    }
  }

  handleChange = selectedOption => {
    this.setState({selectedOption})
    this.props.toggleSearchClassModal()
  }
  render() {
    const {selectedOption} = this.state

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Course code, course name, department"
        styles={customStyles}
      />
    )
  }
}
export default SearchBar
