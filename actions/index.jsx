var axios = require ('axios');

export var mapStart = () => {
  return {
    type: "FETCHING_START"
  }
}

export var mapStop = (url) => {
  return {
    type: "FETCHING_COMPLETED",
    url
  }
}

export var mapFetching = () => {
  return (dispatch,getState) => {
    dispatch(mapStart());

    axios.get('http://ipinfo.io').then(function (res) {
      var loc = res.data.loc;
      var url = "https://maps.google.com?q=";
      dispatch(mapStop(url+loc));
    });
  }
};


export var changeName = (name) => {
  return {
    type:'CHANGE_NAME',
    name
  }
}

export var changeMovie = (movie) => {
  return {
    type: 'CHANGE_MOVIE',
    movie
  }
}

export var  removeMovie = (rmovie) => {
  return {
    type: 'REMOVE_MOVIE',
    rmovie
  }
}
