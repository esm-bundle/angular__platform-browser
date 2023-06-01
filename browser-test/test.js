describe("@esm-bundle/angular__platform-browser", () => {
  describe("@angular/platform-browser", () => {
    it("can load the System.register es2022 bundle", async () => {
      const m = await System.import(
        "/base/system/es2022/ivy/angular-platform-browser.js"
      );
      expect(m.platformBrowser).toBeDefined();
    });

    it("can load the System.register es2022 prod bundle", async () => {
      const m = await System.import(
        "/base/system/es2022/ivy/angular-platform-browser.min.js"
      );
      expect(m.platformBrowser).toBeDefined();
    });
  });

  describe("@angular/platform-browser/animations", () => {
    it("can load the System.register es2022 bundle", async () => {
      const m = await System.import(
        "/base/system/es2022/ivy/angular-animations.js"
      );
      expect(m.BrowserAnimationsModule).toBeDefined();
    });

    it("can load the System.register es2022 prod bundle", async () => {
      const m = await System.import(
        "/base/system/es2022/ivy/angular-animations.min.js"
      );
      expect(m.BrowserAnimationsModule).toBeDefined();
    });
  });
});
