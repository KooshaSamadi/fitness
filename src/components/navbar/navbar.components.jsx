import { React, Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.styles.scss";
import Footer from "../footer/footer.components";

function Navbar() {
  return (
    <Fragment>
      <nav className="navbar container-xxl">
        <div className="left-navbar">
          <div className="navbar_image_container">
            <Link to="/">
              <img
                src="https://img.icons8.com/ios-glyphs/60/undefined/gum-.png"
                alt="website logo"
              />
            </Link>
          </div>
          <div className="navbar_links">
            <Link to="/">HOME</Link>
            <a href="#exercise">EXERCISE</a>
          </div>
        </div>
        <div className="right-navbar"></div>
      </nav>
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default Navbar;
