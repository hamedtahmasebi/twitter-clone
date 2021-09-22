import React, { useContext, useEffect, useState } from "react";
import StickyHeader from "../components/layout/StickyHeader";
import Tweet from "../components/tweets/Tweet";
import tweetscontext from "../context/tweetContext/tweetsContext";
import Spinner from "../components/spinner/Spinner";
export const Bookmarks = () => {
  const tweetsContext = useContext(tweetscontext);
  const { tweets, getTweets, loading } = tweetsContext;
  const [bookmarks, setBookmarks] = useState(null);

  useEffect(() => {
    getTweets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (tweets !== null) {
      setBookmarks(tweets.filter(tweet => tweet.isBookmarked === true));
    }
  }, [tweets]);

  return (
    <div>
      <StickyHeader
        title="Bookmarks"
        subTitle={(bookmarks !== null ? bookmarks.length : "0") + " Bookmarks"}
      />

      {bookmarks !== null && bookmarks.length !== 0 ? (
        bookmarks.map(bookmark => (
          <div className="border">
            <Tweet tweet={bookmark} key={bookmark._id} />
          </div>
        ))
      ) : loading ? (
        <Spinner />
      ) : (
        <div className="text-center text-secondary my-3">
          <h3>No bookmarks to show</h3>
          <p>
            You can bookmark your favorite tweets by clicking on three dots at
            the top right corner of the tweet.
          </p>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
