import React from 'react';
import ToDo from './ToDo.jsx';

class ToDoList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    var {todos} = this.props;
    var comp = this.props.todos.map((tod) => {
      return(
        <ToDo key={tod.id} {...tod}/>
      );
    })
    return(
      <div>
        ToDOList
        {comp}
      </div>
    );
  }
}


export default ToDoList;
