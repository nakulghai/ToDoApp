export var nameReducer = (state='anonymous' , action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
}

export var movieReducer = (state=[] , action) => {
  switch (action.type) {
    case 'CHANGE_MOVIE':
      return [
        ...state,
        action.movie
      ];
    case 'REMOVE_MOVIE':
        return state.filter((movie) => movie !== action.rmovie);
    default:
      return state;
  }
}

export var mapReducer = (state={isFetching:false , url: undefined} , action) => {
  switch (action.type) {
    case 'FETCHING_START':
      return {
        isFetching: true,
        url: undefined
      }
      case 'FETCHING_COMPLETED':
        return {
          isFetching: false,
          url: action.url
        }
    default:
      return state;
  }
}
