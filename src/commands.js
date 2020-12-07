class Git {
  state = {
    initializedRepo: false,
    commands: [],
  };
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
      default:
        print("No such git command.");
    }
  }
  help(print) {
    print(
      "Help command version 0.0.1\n git init : Create an empty Git repository or reinitialize an existing one \n git add : Add file contents to the index \n git commit : Record changes to the repository \n git push :  Update remote refs along with associated objects \n git branch :  List, create, or delete branches \n git checkout : Switch branches or restore working tree files \n git merge : Join two or more development histories together \n git status : Show the working tree status"
    );
  }
}

export default Git;
