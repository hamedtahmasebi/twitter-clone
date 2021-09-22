import React from "react";
import StickyHeader from "../components/layout/StickyHeader";
import { Notif } from "../components/Notifications/Notif";
const notifs = [
  {
    notifType: "like",
    user: "Josh",
    tweet:
      "Aliqua est minim incididunt aliqua fugiat do sit id ipsum aute culpa aliqua.",
  },
  {
    notifType: "retweet",
    user: "sarah",
    tweet:
      "Consectetur est sunt eiusmod adipisicing commodo voluptate consequat commodo.",
  },
  {
    notifType: "like",
    user: "sarah",
    tweet:
      "Ad anim commodo id eiusmod quis labore in commodo qui dolor sint consectetur.",
  },
  {
    notifType: "retweet",
    user: "josh",
    tweet:
      "Dolore id sint Lorem deserunt cillum aliqua aute reprehenderit irure ipsum voluptate culpa.",
  },
];
export const Notifications = () => {
  return (
    <div>
      <StickyHeader title="Notifications" subTitle="userName" />
      <div className=" ">
        {notifs.map(notif => {
          return <Notif notif={notif} />;
        })}
      </div>
    </div>
  );
};
