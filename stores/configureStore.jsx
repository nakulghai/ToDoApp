var redux = require('redux');
var thunk = require ('redux-thunk').default;
import {nameReducer , movieReducer , mapReducer} from './../reducers/index.jsx';


export var configure = () => {
  var reducer = redux.combineReducers({
        name: nameReducer,
        movies: movieReducer,
        map: mapReducer
      });
  var store = redux.createStore(reducer , redux.compose(
    redux.applyMiddleware(thunk)
  ));
  return store;
}
