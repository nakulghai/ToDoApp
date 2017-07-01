import React from 'react';
import NavBar from './NavBar.jsx';
var redux = require('redux');
import axios from 'axios';
var actions = require ('./../actions/index.jsx');

var store = require ('./../stores/configureStore.jsx').configure();;


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

    store.subscribe(() => {
      let val = store.getState();
      console.log('currentstate',val);
      let st = store.getState();
      if(!st.map.isFetching) {
        console.log("inner html");
        document.getElementById("app").innerHTML = '<a href="'+st.map.url+'" target="_blank">click</a>'
      }
    });
    store.dispatch(actions.mapFetching());
    store.dispatch(actions.changeName("nakul"));
    store.dispatch(actions.changeName("rahul"));
    store.dispatch(actions.changeMovie('BBB'));
    store.dispatch(actions.removeMovie('BBB'));
    return(
      <div id="app1">
        MainPage {this.state.name}
        {1+1}{store.getState()}
        <NavBar />
        <input type='text' onChange={this.handleChange} />
        <p>value of input is {this.state.value}</p>
      </div>
    );
  }
}

export default MainPage;
