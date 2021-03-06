import * as ActionTypes from "../actionTypes";

const movieReducer = (
  state = {
    movie: [],
    isLoading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.MOVIES_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ActionTypes.MOVIES_LOADING:
      return { ...state, isLoading: true, error: null };
    case ActionTypes.MOVIES_LOADED:
      return {
        ...state,
        movie: action.payload,
        isLoading: false,
        error: null,
      };
    case ActionTypes.ADD_MOVIE_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ActionTypes.ADD_MOVIE_LOADED:
      return {
        ...state,
        movie: [...state.movie, action.payload],
        isLoading: false,
        error: null,
      };

    case ActionTypes.ADD_MOVIE_LOADING:
      return { ...state, isLoading: true, error: null };

    case ActionTypes.DELETE_MOVIE_LOADED:
      return {
        ...state,
        isLoading: false,
        error: null,
        movie: state.movie.filter((item) => item._id !== action.payload.id),
      };

    case ActionTypes.DELETE_MOVIE_LOADING:
      return { ...state, isLoading: true, error: null };

    case ActionTypes.DELETE_MOVIE_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
export default movieReducer;
