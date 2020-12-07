import React, { useState } from "react";
import Terminal from "terminal-in-react";

import "./home.css";
import Header from "../../components/Header/Header";
import Git from "../../commands";

const Home = () => {
  var git = new Git();
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
              git: (args, print, runCommand) =>
                git.exec(args.slice(1), print, runCommand),
              help: (args, print, runCommand) => {
                git.help(print);
              },
            }}
            descriptions={{
              "git init": "initializing a new git repository",
              "git add": "stage the changes",
              "git commit": "commit the staged changes",
              "git push": "push the local changes",
              "git branch": "lists the branches",
            }}
            msg="Welcome to Git Console! Start by initializing a git repository."
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
