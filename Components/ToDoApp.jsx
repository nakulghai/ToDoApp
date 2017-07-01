import React from 'react';
import ToDoList from './ToDoList.jsx';

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
      ]
    }
  }
  render() {
    return(
      <div>
        To Do App
        <ToDoList todos={this.state.array}/>
      </div>
    );
  }
}

export default ToDoApp;
