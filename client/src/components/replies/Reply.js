import React from "react";
import Tweet from "../tweets/Tweet";

export const Reply = ({ replyData: { user, repliedToTweet, replyTweet } }) => {
  return (
    <div className="d-flex flex-column border">
      <Tweet tweet={repliedToTweet} showReplyBar={true} />

      <Tweet tweet={replyTweet} />
    </div>
  );
};
