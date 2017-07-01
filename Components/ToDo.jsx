import React from 'react';

class ToDo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        {this.props.id}{this.props.text}
      </div>
    );
  }
}

export default ToDo;
