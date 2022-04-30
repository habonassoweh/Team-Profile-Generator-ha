test("creates an engineer object", () => {
  const engineer = new Engineer("Habon");

  expect(engineer.name).toBe("Habon");
  expect(engineer.value).toEqual(expect.any(Number));
});

function Engineer(name) {
  this.name = name;

  if (this.name === "Habon") {
    this.value = Math.floor(Math.random() * 10 + 30);
  } else {
    this.value = Math.floor(Math.random() * 5 + 7);
  }
}

module.exports = Engineer;
