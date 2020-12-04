import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import Sidebar from "react-sidebar";

import "./header.css";

const MenuItem = (props) => {
  return (
    <li className={props.currentPage == props.title ? "active" : ""}>
      <a href={props.url}>{props.title}</a>
    </li>
  );
};

const Header = (props) => {
  const [mobileMenuState, setMobileMenuState] = useState(false);

  return (
    <div className="main">
      <div className="desktop">
        <ul>
          <MenuItem title="Home" url="#" currentPage={props.currentPage} />
          <MenuItem title="About" url="#" currentPage={props.currentPage} />
          <MenuItem title="Tutorial" url="#" currentPage={props.currentPage} />
          <li>
            <div className="logo">
              <h2>Visual Git</h2>
            </div>
          </li>
          <MenuItem title="Commands" url="#" currentPage={props.currentPage} />
          <MenuItem
            title="Source on GitHub"
            url="#"
            currentPage={props.currentPage}
          />
          <MenuItem title="Share" url="#" currentPage={props.currentPage} />
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
                <MenuItem
                  title="Home"
                  url="#"
                  currentPage={props.currentPage}
                />
                <MenuItem
                  title="About"
                  url="#"
                  currentPage={props.currentPage}
                />
                <MenuItem
                  title="Tutorial"
                  url="#"
                  currentPage={props.currentPage}
                />
                <MenuItem
                  title="Commands"
                  url="#"
                  currentPage={props.currentPage}
                />
                <MenuItem
                  title="Source on GitHub"
                  url="#"
                  currentPage={props.currentPage}
                />
                <MenuItem
                  title="Share"
                  url="#"
                  currentPage={props.currentPage}
                />
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
