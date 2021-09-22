import React, { useContext, Fragment } from "react";
import TweetsContext from "../../context/tweetContext/tweetsContext";
import blank_profile from "../../pictures/blank_profile.png";
export const Tweet = ({ tweet, showReplyBar }) => {
  let {
    _id,
    userName,
    date,
    tweetText,
    replies,
    likes,
    retweets,
    isBookmarked,
    isRetweeted,
    isLiked,
  } = tweet;
  var formattedDate = new Date(date).toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
  });
  // Context implement
  const tweetsContext = useContext(TweetsContext);
  const { deleteTweet, updateTweet } = tweetsContext;

  const onDeleteTweet = () => {
    deleteTweet(_id);
  };

  const onBookmark = () => {
    updateTweet({ ...tweet, isBookmarked: !tweet.isBookmarked });
  };

  const onLike = () => {
    var numberOfLikes;
    if (tweet.isLiked === true) {
      numberOfLikes = likes - 1;
    } else if (isLiked === false) {
      numberOfLikes = likes + 1;
    }
    updateTweet({ ...tweet, isLiked: !tweet.isLiked, likes: numberOfLikes });
  };
  return (
    <div className={`d-flex slideUp  p-4 `}>
      <div>
        <img
          src={blank_profile}
          className="rounded-50"
          width="50"
          height="50"
          alt=""
        />
        {/* this div is shown only if this is a replied tweet */}
        {showReplyBar && (
          <div
            className=" mx-auto mt-1"
            style={{
              width: "2px",
              height: "93%",
              backgroundColor: "#c9c9c9",
            }}
          ></div>
        )}
      </div>
      <div className="w-100 ms-3">
        <div className="d-flex w-100 justify-content-between align-items-start">
          <div>
            <span>
              <a className="user-link fs-6" href="/#">
                {userName}
              </a>
            </span>
            <span className="fw-bold"> {formattedDate}</span>
          </div>
          <div class="dropdown">
            <button
              className=" p-0 d-block"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-three-dots more-btn"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button className="dropdown-item" onClick={onBookmark}>
                  {!isBookmarked ? (
                    <Fragment>
                      <i className="bi bi-bookmark"></i> Bookmark
                    </Fragment>
                  ) : (
                    <Fragment>
                      <i className="bi bi-bookmark-x-fill"></i> Delete bookmark
                    </Fragment>
                  )}
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={onDeleteTweet}>
                  <i className="bi bi-emoji-frown"></i> Not interested in this
                  tweet
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>{tweetText}</p>
        </div>
        <div className="d-flex justify-content-between pe-4">
          <div className="d-flex align-items-center">
            <span className="material-icons t-icon blue-hover">comment</span>
            <span className="w-1">{replies}</span>
          </div>
          <div className="d-flex align-items-center">
            <span
              className={
                `material-icons t-icon green-hover ` +
                (isRetweeted ? "text-success" : "text-secondary")
              }
            >
              repeat
            </span>
            <span className="w-1">{retweets}</span>
          </div>
          <div className="d-flex align-items-center">
            <span
              className={
                `material-icons t-icon pink-hover ` +
                (isLiked ? "text-danger" : "text-secondary")
              }
              onClick={onLike}
            >
              {isLiked ? "favorite" : "favorite_border"}
            </span>
            <span className="w-1">{likes}</span>
          </div>
          <span className="material-icons t-icon blue-hover">share</span>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
