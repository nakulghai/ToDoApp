import React from 'react';

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    var value = this.refs.add.value;
    this.refs.add.value = '';
    if (value.length > 0) {
      this.props.onSubmit(value)
    }
    console.log("value is" + this.refs.add.value);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref="add" />
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default AddToDo;
