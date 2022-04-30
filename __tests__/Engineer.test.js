const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Habon");

  expect(engineer.name).toBe("Habon");
  expect(engineer.value).toEqual(expect.any(Number));
});

module.exports = Engineer;
