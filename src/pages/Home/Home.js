import React, { useState } from "react";
import Terminal from "terminal-in-react";

import "./home.css";
import Header from "../../components/Header/Header";
import Git from "../../commands";

const Home = () => {
  var git = new Git();
  const [state, setState] = useState({});

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
            promptSymbol="$"
            style={{ fontWeight: "bold", fontSize: "1em" }}
            commands={{
              git: (args, print, runCommand) =>
                setState(git.exec(args.slice(1), print, runCommand)),
              help: (args, print, runCommand) => {
                git.help(print);
              },
            }}
            descriptions={{
              "git init":
                "Create an empty Git repository or reinitialize an existing one",
              "git add": "Add file contents to the index",
              "git commit": "Record changes to the repository",
              "git push": "Update remote refs along with associated objects",
              "git branch": "List, create, or delete branches",
              "git checkout": "Switch branches or restore working tree files",
              "git merge": "Join two or more development histories together",
              "git status": "Show the working tree status",
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
