import React, { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { NavigationTabs } from "../components/layout/NavigationTabs";
import StickyHeader from "../components/layout/StickyHeader";
import { Replies } from "../components/replies/Replies";
import Tweets from "../components/tweets/Tweets";
import "../styles/profile.css";
import blank_profile from "../pictures/blank_profile.png";
// context
import TweetsContext from "../context/tweetContext/tweetsContext";
export const Profile = ({ user }) => {
  const tweetsContext = useContext(TweetsContext);
  const { loading, tweets, getTweets } = tweetsContext;
  let { tab } = useParams();

  useEffect(() => {
    getTweets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <StickyHeader
        title="Profile"
        subTitle={(tweets !== null ? tweets.length : "0") + " Tweets"}
      />
      <div class="card border-bottom-0" style={{ borderRadius: "0" }}>
        <div
          style={{ height: "200px", width: "100%", backgroundColor: "gray" }}
        ></div>
        <div class="card-body p-0">
          <img
            src={blank_profile}
            className=" bg-white border border-2 border-light rounded-50 position-absolute profile-pic-overlap"
            alt="Profile"
          />
          <div className="mt-5 pt-3 ">
            <div className="px-4">
              <div className="card-title">
                <h5 className="m-0">Hamed Tahmasebi</h5>
                <small>@UserName</small>
              </div>
              <p class="card-text">
                Dolore labore quis eiusmod nulla reprehenderit deserunt Lorem
                esse sit commodo in sit officia in. Fugiat dolore eiusmod est
                culpa
              </p>
              <div className="d-flex align-items-center">
                <div>
                  <i className="material-icons  text-secondary">fmd_good</i>
                </div>
                <div>
                  <h6 className="mb-1 ps-1  text-secondary">Location</h6>
                </div>
                <div className="ms-2">
                  <i className="material-icons  text-secondary">date_range</i>
                </div>
                <div>
                  <h6 className="mb-1 ps-1  text-secondary">
                    Joined Augest 2021
                  </h6>
                </div>
              </div>
              <div className="d-flex gap-2 my-2">
                <span>
                  12{" "}
                  <a href="/#" className="text-black text-decoration-none">
                    Following
                  </a>
                </span>
                <span>
                  36{" "}
                  <a href="/#" className="text-black text-decoration-none">
                    Followers
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavigationTabs />
      {tab === "tweets" && !loading && <Tweets tweets={tweets} />}
      {tab === "replies" && <Replies />}
    </Fragment>
  );
};
