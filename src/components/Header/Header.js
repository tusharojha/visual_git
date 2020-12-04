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
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Tutorial</a>
          </li>
          <li>
            <div className="logo">
              <h2>Visual Git</h2>
            </div>
          </li>
          <li>
            <a href="#">Commands</a>
          </li>
          <li>
            <a href="#">Source on GitHub</a>
          </li>
          <li>
            <a href="#">Share</a>
          </li>
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
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Tutorial</a>
                </li>
                <li>
                  <a href="#">Commands</a>
                </li>
                <li>
                  <a href="#">Source on GitHub</a>
                </li>
                <li>
                  <a href="#">Share</a>
                </li>
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
