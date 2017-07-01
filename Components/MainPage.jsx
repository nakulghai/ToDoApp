import React from 'react';
import NavBar from './NavBar.jsx';



class MainPage extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
    console.log("redux started");
  }

  handleChange (e) {
    this.setState({value: e.target.value});
  }

  render () {
    return(
      <div>
      MainPag
      </div>
    );
  }
}

export default MainPage;
