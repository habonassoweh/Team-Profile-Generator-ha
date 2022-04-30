const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Habon");

  expect(engineer.name).toBe("Habon");
});

module.exports = Engineer;
