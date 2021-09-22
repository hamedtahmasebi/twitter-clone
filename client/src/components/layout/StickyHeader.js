import React from "react";

export const StickyHeader = ({ title, subTitle }) => {
  return (
    <div className="border px-4 py-3 sticky-top bg-white shadow-sm">
      <h2 className="m-0 fs-4">{title}</h2>
      <span>{subTitle}</span>
    </div>
  );
};

export default StickyHeader;
