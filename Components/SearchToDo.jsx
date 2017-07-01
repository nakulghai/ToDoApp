import React from 'react';

class SearchToDo extends React.Component {
  constructor(props) {
    super (props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    let searchText = this.refs.search.value;
    let checkText = this.refs.check.checked;
    console.log(searchText + checkText);
  }
  render() {
    return(
      <div>
        <div><input text="search" ref="search" onChange={this.handleChange} /></div>
        <label>
          <input type="checkbox" ref="check" onChange={this.handleChange} />
          Please select this box
        </label>
      </div>
    );
  }
}

export default SearchToDo;
