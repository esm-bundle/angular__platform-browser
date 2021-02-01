describe("@esm-bundle/angular__platform-browser", () => {
  it("can load the System.register es2015 dev bundle", () => {
    return System.import("/base/system/es2015/ivy/angular-platform-browser.js");
  });

  it("can load the System.register es2015 prod bundle", () => {
    return System.import(
      "/base/system/es2015/ivy/angular-platform-browser.min.js"
    );
  });
});
