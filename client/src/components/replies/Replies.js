import React, { Fragment } from "react";
import { Reply } from "./Reply";
const replies = [
  {
    user: "Sarah",
    repliedToTweet: {
      id: 2,
      date: "june 17",
      userName: "knaris1",
      userAddress: "lbayles1",
      tweetText:
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    },
    replyTweet: {
      id: 4,
      date: "june 17",
      userName: "sblackney3",
      userAddress: "lhastilow3",
      tweetText:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
  },
];

export const Replies = () => {
  return (
    <Fragment>
      {replies.map(reply => {
        return <Reply replyData={reply} />;
      })}
    </Fragment>
  );
};
