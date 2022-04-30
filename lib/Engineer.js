const employee = require("../lib/Employee");

class Engineer extends employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getGitHub() {
    return this.gitHub;
  }
  getRole() {
    return "engineer";
  }
}

module.exports = Engineer;
