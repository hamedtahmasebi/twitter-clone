import {
  ADD_TWEET,
  DELETE_TWEET,
  GET_TWEETS,
  TWEETS_ERROR,
  UPDATE_TWEET,
} from "../Types";

function Reducer(state, action) {
  switch (action.type) {
    case GET_TWEETS:
      return {
        ...state,
        tweets: action.payload,
        loading: false,
      };
    case ADD_TWEET:
      return {
        ...state,
        tweets: [action.payload, ...state.tweets],
      };
    case DELETE_TWEET:
      return {
        ...state,
        tweets: state.tweets.filter(tweet => tweet._id !== action.payload),
        loading: false,
      };
    case UPDATE_TWEET:
      return {
        ...state,
        loading: false,
        tweets: state.tweets.map(tweet => {
          if (tweet._id === action.payload._id) {
            return action.payload;
          } else {
            return tweet;
          }
        }),
      };
    case TWEETS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default Reducer;
