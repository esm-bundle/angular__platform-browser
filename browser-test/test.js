describe("@esm-bundle/angular__platform-browser", () => {
  it("can load the esm es2015 bundle", () => {
    // es-module-shims
    return import("/base/esm/es2015/angular-platform-browser.resolved.min.js");
  });

  it("can load the esm es5 bundle", () => {
    // es-module-shims
    return import("/base/esm/es5/angular-platform-browser.resolved.min.js");
  });

  it("can load the System.register es2015 bundle", () => {
    return System.import("/base/system/es2015/angular-platform-browser.min.js");
  });

  it("can load the System.register es5 bundle", () => {
    return System.import("/base/system/es5/angular-platform-browser.min.js");
  });
});
