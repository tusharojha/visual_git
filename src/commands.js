class Git {
  state = {
    initializedRepo: false,
    currentBranch: "main",
    branches: [{ name: "main", head: "" }],
    commands: [],
    tree: {},
  };

  checkout(args) {
    if (this.state.initializedRepo == false)
      return "fatal: not a git repository (or any of the parent directories): .git";
    if (args.length == 0) return this.listAllBranches();
    if (args[0] == "-b") {
      if (args.length < 2)
        return "fatal: branch name is not passed as parameter";
      var branchName = args[1];
      if (this.state.branches.findIndex((v) => v.name == branchName) != -1)
        return "fatal: branch already exists with the name: " + branchName;
      this.branch([branchName]);
      this.state.currentBranch = branchName;
      return (
        "Switched to new branch " + branchName + "\n" + this.listAllBranches()
      );
    }
    if (this.state.branches.findIndex((v) => v.name == args[0]) == -1)
      return "fatal: branch with name " + args[0] + " doesn't exists.";
    this.state.currentBranch = args[0];
    return "switched to branch " + args[0] + "\n" + this.listAllBranches();
  }

  listAllBranches() {
    var message = "";
    this.state.branches.forEach((i) => {
      if (i.name == this.state.currentBranch) {
        message += i.name + " * \n";
      } else {
        message += i.name + "\n";
      }
    });
    return message;
  }

  branch(args) {
    if (this.state.initializedRepo == false)
      return "fatal: not a git repository (or any of the parent directories): .git";
    if (args.length == 0) return this.listAllBranches();
    if (args[0] == "-a") return this.listAllBranches();
    if (args[0] == "-d") {
      if (args.length < 2)
        return "git branch -d : branch name not passed as parameter";
      var branchName = args[1];
      if (this.state.branches.findIndex((i) => i.name == branchName) == -1)
        return "git error: branch with name " + branchName + " doesn't exists";
      if (branchName == "main")
        return "cannot delete main branch of the git repository";
      else if (this.state.currentBranch == branchName)
        this.state.currentBranch = "main";
      this.state.branches = this.state.branches.filter(
        (v) => v.name != branchName
      );
      delete this.state.tree[branchName];
      return (
        "Deleted branch " +
        branchName +
        " from the git repository. \nHead at " +
        this.state.currentBranch +
        " branch"
      );
    }
    var branchName = args[0];
    if (this.state.branches.findIndex((i) => i.name == branchName) != -1)
      return "git error: branch with name " + branchName + " already exists";
    var currentBranch = this.state.tree[this.state.currentBranch];
    this.state.branches.push({
      name: branchName,
      head:
        currentBranch != null
          ? currentBranch.length > 0
            ? currentBranch[currentBranch.length - 1].id
            : ""
          : "",
    });
    this.state.tree[branchName] = [];
    return "created new branch " + branchName + "\n" + this.listAllBranches();
  }

  commit(args) {
    if (this.state.initializedRepo == false)
      return "fatal: not a git repository (or any of the parent directories): .git";
    if (args.length == 0) return "no parameters passed to git commit";
    if (args[0] == "-am") this.add();
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
      var commits = this.state.tree[this.state.currentBranch] ?? [];
      this.state.tree[this.state.currentBranch] = [
        ...commits,
        {
          id: generateCode,
          commit: commitMessage,
          lastCommit:
            commits != null
              ? commits.length > 0
                ? commits[commits.length - 1].id
                : ""
              : "",
        },
      ];
      console.log(this.state);
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
      case "branch":
        print(this.branch(args.slice(1)));
        break;
      case "checkout":
        print(this.checkout(args.slice(1)));
        break;
      case undefined:
        print(
          "Welcome to Visual Git!\nThese are common Git commands used in various situations:\n"
        );
        this.help(print);
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
