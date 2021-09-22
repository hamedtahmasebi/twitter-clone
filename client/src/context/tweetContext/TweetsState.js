import React, { useReducer } from "react";
import TweetsContext from "./tweetsContext";
import tweetsReducer from "./tweetsReducer";
import axios from "axios";

import {
  GET_TWEETS,
  ADD_TWEET,
  DELETE_TWEET,
  SET_LOADING,
  TWEETS_ERROR,
  UPDATE_TWEET,
} from "../Types";
const TweetsState = props => {
  const initialState = {
    tweets: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(tweetsReducer, initialState);
  function setLoading(status) {
    dispatch({ type: SET_LOADING, payload: status });
  }

  const getTweets = async () => {
    try {
      const res = await axios.get("/api/tweets");
      dispatch({ type: GET_TWEETS, payload: res.data });
    } catch (error) {
      dispatch({ type: TWEETS_ERROR, payload: error });
    }
  };

  const addTweet = async data => {
    try {
      const res = await axios.post("/api/tweets", data);
      dispatch({ type: ADD_TWEET, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: TWEETS_ERROR, payload: error });
    }
  };

  const deleteTweet = async _id => {
    try {
      setLoading(true);
      await axios.delete(`/api/tweets/${_id}`);
      dispatch({ type: DELETE_TWEET, payload: _id });
    } catch (error) {
      dispatch({ type: TWEETS_ERROR, payload: error });
    }
  };

  const updateTweet = async tweet => {
    setLoading(true);
    try {
      const res = await axios.put("/api/tweets/", tweet);
      dispatch({ type: UPDATE_TWEET, payload: res.data });
    } catch (error) {
      dispatch({ type: TWEETS_ERROR, payload: error });
    }
  };

  return (
    <TweetsContext.Provider
      value={{
        tweets: state.tweets,
        loading: state.loading,
        deleteTweet,
        getTweets,
        addTweet,
        setLoading,
        updateTweet,
      }}
    >
      {props.children}
    </TweetsContext.Provider>
  );
};

export default TweetsState;
