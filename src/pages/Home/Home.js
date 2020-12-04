import React from "react";
import Terminal from "terminal-in-react";

import "./home.css";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header currentPage="Home" />
      <div className="body">
        <div className="terminal">
          <Terminal
            color="white"
            backgroundColor="black"
            hideTopBar={true}
            allowTabs={false}
            style={{ fontWeight: "bold", fontSize: "1em" }}
            commands={{
              "open-google": () =>
                window.open("https://www.google.com/", "_blank"),
              showmsg: "Hello World",
              popup: () => alert("Terminal in React"),
            }}
            descriptions={{
              "open-google": "opens google.com",
              showmsg: "shows a message",
              alert: "alert",
              popup: "alert",
            }}
            msg="Welcome to the Git console! Start by initializing a git repository."
          />
        </div>
        <div className="visual">
          <p>Tree</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
