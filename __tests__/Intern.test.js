test("creates an intern object", () => {
  const intern = new Intern("Habon");

  expect(intern.name).toBe("Habon");
});

function Intern(name) {
  this.name = name;
}

module.exports = Intern;
