const Manager = require("../lib/Manager");

test("creates an manager object", () => {
  const manager = new Manager("Habon");

  expect(manager.name).toBe("Habon");
});

module.exports = Manager;
