import React, { useContext, useEffect } from "react";
import Tweet from "./Tweet";
import Spinner from "../spinner/Spinner";
import TweetsContext from "../../context/tweetContext/tweetsContext";
export const Tweets = () => {
  const tweetsContext = useContext(TweetsContext);
  const { getTweets, tweets, loading } = tweetsContext;
  useEffect(() => {
    getTweets();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var feedItems = [...tweets];
  return (
    <div className="mb-4">
      {loading && <Spinner />}
      {!loading &&
        feedItems.map(el => (
          <div className="border">
            <Tweet tweet={el} key={el._id} />
          </div>
        ))}
      {!loading && feedItems.length === 0 && (
        <p className="text-center text-secondary mt-2">
          No tweets to show , please add one.
        </p>
      )}
    </div>
  );
};

export default Tweets;
