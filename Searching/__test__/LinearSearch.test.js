const { isExportDeclaration } = require("typescript");
const LinearSearch = require("../LinearSearch");

describe("LinearSearch testing", () => {
  it("If we are to search for 4 in an array", () => {
    expect(LinearSearch([1, 4, 5, 7, 8, 3, 9, 2], 4)).toBeTruthy();
  });
});
