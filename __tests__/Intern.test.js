const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Habon");

  expect(intern.name).toBe("Habon");
});

module.exports = Intern;
