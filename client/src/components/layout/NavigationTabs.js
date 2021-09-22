import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export const NavigationTabs = () => {
  let { tab } = useParams();
  useEffect(() => {
    if (tab) {
      document.querySelector(".active-tab").classList.remove("active-tab");
      document.getElementById(tab).classList.add("active-tab");
    }
  });
  return (
    <ul className="nav nav-fill border">
      <li className="nav-item hover-gray">
        <Link
          id="tweets"
          className="nav-link text-black active-tab"
          to="/user/profile/tweets"
          // onClick={e => onClickTab(e)}
        >
          Tweets
        </Link>
      </li>
      <li className="nav-item hover-gray ">
        <Link
          className="nav-link text-black"
          to="/user/profile/replies"
          id="replies"
          // onClick={e => onClickTab(e)}
        >
          Replies
        </Link>
      </li>
      <li className="nav-item hover-gray ">
        <Link
          className="nav-link text-black"
          to="/user/profile/media"
          id="media"
          // onClick={e => onClickTab(e)}
        >
          Media
        </Link>
      </li>
      <li className="nav-item hover-gray ">
        <Link
          className="nav-link text-black"
          to="/user/profile/likes"
          id="likes"
          // onClick={e => onClickTab(e)}
        >
          Likes
        </Link>
      </li>
    </ul>
  );
};
