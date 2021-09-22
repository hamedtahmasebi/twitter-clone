import React, { Fragment } from "react";
import Tweets from "../components/tweets/Tweets";
import AddTweet from "../components/tweets/AddTweet";
import StickyHeader from "../components/layout/StickyHeader";
export const Home = () => {
  return (
    <Fragment>
      <StickyHeader title="Home" subTitle="userName" />
      <AddTweet />
      <Tweets />
    </Fragment>
  );
};
export default Home;
