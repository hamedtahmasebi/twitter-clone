import React from "react";
import blank_profile from "../../pictures/blank_profile.png";
export const Notif = ({ notif: { notifType, user, tweet } }) => {
  return (
    <div className="d-flex gap-3 border border-top-0 py-2 px-3">
      <div>
        {notifType === "like" && (
          <span className="material-icons fs-3 text-danger">favorite</span>
        )}
        {notifType === "retweet" && (
          <span className="material-icons fs-3 text-success">repeat</span>
        )}
      </div>
      <div>
        <img
          width="30"
          height="30"
          className="rounded-50"
          src={blank_profile}
          alt=""
        />
        <div className="mt-2">
          <strong>{user}</strong>
          <span> {notifType}ed your tweet</span>
          <p>{tweet}</p>
        </div>
      </div>
    </div>
  );
};
