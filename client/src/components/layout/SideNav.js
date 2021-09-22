import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export const SideNav = () => {
  return (
    <Fragment>
      <div className="">
        <div className="d-none d-md-block">
          <i className="bi bi-twitter fs-2 text-primary ms-3 mt-2"></i>
        </div>
        <div className="nav-list-container d-flex flex-column w-100  bg-white">
          <ul className=" nav-list list-unstyled mt-lg-4 mb-0 d-flex d-md-block justify-content-evenly">
            <li>
              <Link to="/#" className="btn hover-gray rounded-4 fs-3">
                <i className="bi bi-house text-black"></i>
                <h5 className="d-none d-lg-inline"> Home</h5>
              </Link>
            </li>

            <li>
              <Link
                to="/user/notifications"
                className="btn hover-gray rounded-4 fs-3"
              >
                <i className="bi bi-bell text-black"></i>
                <h5 className="d-none d-lg-inline"> Notification</h5>
              </Link>
            </li>

            <li>
              <Link
                to="/user/bookmarks"
                className="btn hover-gray rounded-4 fs-3"
              >
                <i className="bi bi-bookmarks text-black"></i>
                <h5 className="d-none d-lg-inline"> Bookmarks</h5>
              </Link>
            </li>

            <li>
              <Link
                to="/user/profile/tweets"
                className="btn hover-gray rounded-4 fs-3"
              >
                <i className="bi bi-person text-black"></i>
                <h5 className="d-none d-lg-inline"> Profile</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default SideNav;
