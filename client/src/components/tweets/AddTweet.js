import React, { useState, useContext } from "react";
import Tweetscontext from "../../context/tweetContext/tweetsContext";
import blank_profile from "../../pictures/blank_profile.png";
export const AddTwitt = () => {
  const [tweet, setTweet] = useState("");

  const tweetsContext = useContext(Tweetscontext);
  const { addTweet } = tweetsContext;

  const onAddTweet = e => {
    e.preventDefault();
    const today = new Date();
    var newTweet = {
      id: 0,
      userName: "Guest",
      userAddress: "@guest",
      tweetText: tweet,
      date: today,
    };
    addTweet(newTweet);
    setTweet("");
  };

  return (
    <div className="border p-4  d-flex">
      <div>
        {/* Profile Image here */}
        <img
          src={blank_profile}
          className="rounded-50"
          width="50"
          height="50"
          alt=""
        />
      </div>
      <div className="w-100 ms-3">
        <form action="post" onSubmit={e => onAddTweet(e)}>
          <textarea
            name="new-twitt"
            id="newTweet"
            placeholder="What's happening?"
            maxLength="180"
            className="w-100 border-none"
            rows="4"
            value={tweet}
            onChange={e => setTweet(e.target.value)}
          ></textarea>

          <div className="d-flex w-100 mt-3 ">
            <button
              type="submit"
              value="Tweet"
              className={`${
                tweet.length < 1 && " disabled"
              } btn btn-primary px-3 rounded-4 ms-auto`}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTwitt;
