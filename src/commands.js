class Git {
  state = {
    initializedRepo: false,
    currentBranch: "main",
    commands: [],
    tree: {},
  };

  commit(args) {
    if (this.state.initializedRepo == false)
      return "fatal: not a git repository (or any of the parent directories): .git";
    if (args.length == 0) return "no parameters passed to git commit";
    if (args[0] == "--am") this.add();
    if (
      this.state.commands.length == 0 ||
      this.state.commands[this.state.commands.length - 1].command != "add"
    )
      return "no changes added to commit";
    if (args[0] == "-m" || args[0] == "-am") {
      args = args.slice(1);
      var commitMessage = "";
      args.forEach((i) => {
        commitMessage += i.replaceAll('"', "") + " ";
      });
      commitMessage.slice(0, commitMessage.length - 1);
      var generateCode = Math.random().toString(36).slice(2).substr(0, 6);
      this.state.tree[this.state.currentBranch] = {
        id: generateCode,
        commit: commitMessage,
      };
      this.state.commands.push({
        command: "commit",
        description: "commit added",
      });
      return (
        generateCode +
        " commit added to the " +
        this.state.currentBranch +
        " branch"
      );
    } else {
      return "git commit " + args[0] + ": not found.";
    }
  }

  add() {
    if (this.state.initializedRepo == true) {
      this.state.commands.push({
        command: "add",
        description: "added unstaged changes",
      });
      return "added unstaged changes";
    }
    return "fatal: not a git repository (or any of the parent directories): .git";
  }

  initRepo() {
    if (this.state.initializedRepo == false) {
      this.state.initializedRepo = true;
      return "Initialized empty Git repository.";
    } else {
      return "Re-initialized git repository.";
    }
  }

  exec(args, print, runCommand) {
    const command = args[0];
    switch (command) {
      case "init":
        print(this.initRepo());
        break;
      case "add":
        print(this.add());
        break;
      case "commit":
        print(this.commit(args.slice(1)));
        break;
      default:
        print("No such git command.");
    }
    return this.state;
  }

  help(print) {
    print(
      "Help command version 0.0.1\n git init : Create an empty Git repository or reinitialize an existing one \n git add : Add file contents to the index \n git commit : Record changes to the repository \n git push : Update remote refs along with associated objects \n git branch : List, create, or delete branches \n git checkout : Switch branches or restore working tree files \n git merge : Join two or more development histories together \n git status : Show the working tree status"
    );
  }
}

export default Git;
