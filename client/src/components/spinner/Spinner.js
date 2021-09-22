import React from "react";
import spinner from "./spinner.svg";
export const Spinner = () => {
  return (
    <div className="text-center">
      Loading...
      <img src={spinner} alt="" className="d-inline" width="50" height="50" />
    </div>
  );
};

export default Spinner;
