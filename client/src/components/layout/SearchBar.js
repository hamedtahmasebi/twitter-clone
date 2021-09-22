import React, { useState, useEffect, useContext } from "react";
import Tweet from "../tweets/Tweet";
import Tweetscontext from "../../context/tweetContext/tweetsContext";
export const SearchBar = () => {
  const tweetsContext = useContext(Tweetscontext);
  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    if (searchText.length > 0) {
      setFiltered(
        tweetsContext.tweets.filter(tw => {
          const regex = new RegExp(`${searchText}`, "gi");
          return tw.tweetText.match(regex) || tw.userName.match(regex);
        })
      );
    } else {
      setFiltered(null);
    }
  }, [searchText, tweetsContext]);
  return (
    <div className="d-flex flex-column gap-3">
      <form action="">
        <div className="d-flex align-items-center search-bar p-2 rounded-4">
          <i className="material-icons">search</i>
          <input
            className="bg-transparent w-100"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={e => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      </form>
      <div className="d-block">
        {filtered !== null &&
          filtered.length > 0 &&
          filtered.map(function (tw) {
            return (
              <div className="my-2 border">
                <Tweet tweet={tw} key={tw._id} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
