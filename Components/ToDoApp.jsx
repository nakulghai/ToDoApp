import React from 'react';
import ToDoList from './ToDoList.jsx';
import AddToDo from './AddToDo.jsx';
import SearchToDo from './SearchToDo.jsx';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array : [
        {
          id:1,
          text:"Walk the dog"
        },
        {
          id:2,
          text:"Feed the dog"
        }
      ],
      addTextValue : ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (value) {
    this.setState({
      array : [
        ...this.state.array,
        {
          text: value
        }
      ]
    });
  }

  render() {
    return(
      <div>
        To Do App
        <AddToDo onSubmit={this.onSubmit}/>
        <ToDoList todos={this.state.array}/>
        <SearchToDo />
        {this.state.addTextValue}
      </div>
    );
  }
}

export default ToDoApp;
