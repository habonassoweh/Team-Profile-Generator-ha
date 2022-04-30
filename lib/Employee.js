// class Employee {
//   constructor(name, id, email) {
//     (this.name = name), (this.id = id), (this.email = email);
//   }
//   getName() {
//     return this.name;
//   }
//   getId() {
//     return this.id;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getRole() {
//     return "employee";
//   }
// }

function randomNumber() {
  return Math.floor(Math.random() * 9 + 1);
}

module.exports = randomNumber;
