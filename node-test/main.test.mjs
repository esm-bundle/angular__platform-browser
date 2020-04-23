describe("@esm-bundle/angular__platform-browser", () => {
  it("can load the esm es2015 bundle without dying", () => {
    return import("../esm/es2015/angular-platform-browser.min.js");
  });

  it("can load the esm es5 bundle without dying", () => {
    return import("../esm/es5/angular-platform-browser.min.js");
  });
});
