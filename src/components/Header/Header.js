import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import Sidebar from "react-sidebar";

import "./header.css";

const Header = (props) => {
  const [mobileMenuState, setMobileMenuState] = useState(false);

  return (
    <div className="main">
      <div className="desktop">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Tutorial</li>
          <li>
            <div className="logo">
              <h2>Visual Git</h2>
            </div>
          </li>
          <li>Commands</li>
          <li>Source on GitHub</li>
          <li>Share</li>
        </ul>
      </div>
      <div className="mobile">
        <div className="logo">
          <h2>Visual Git</h2>
        </div>
        <Sidebar
          sidebar={
            <div className="drawerMenu">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Tutorial</li>
                <li>Commands</li>
                <li>Source on GitHub</li>
                <li>Share</li>
              </ul>
            </div>
          }
          open={mobileMenuState}
          docked={mobileMenuState}
          onSetOpen={() => setMobileMenuState(!mobileMenuState)}
          styles={{ sidebar: { background: "white" } }}
        >
          <div style={{ padding: 10 }}>
            <HamburgerMenu
              isOpen={mobileMenuState}
              menuClicked={() => setMobileMenuState(!mobileMenuState)}
              width={18}
              height={15}
              strokeWidth={2}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default Header;
