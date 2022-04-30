const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Habon");

  expect(employee.name).toBe("Habon");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
