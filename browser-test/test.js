describe("@esm-bundle/angular__platform-browser", () => {
  describe("@angular/platform-browser", () => {
    ["es2015", "es2020"].forEach((ecma) => {
      it(`can load the System.register ${ecma} bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-platform-browser.js`
        );
        expect(m.platformBrowser).toBeDefined();
      });

      it(`can load the System.register ${ecma} prod bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-platform-browser.min.js`
        );
        expect(m.platformBrowser).toBeDefined();
      });
    });
  });

  describe("@angular/platform-browser/animations", () => {
    ["es2015", "es2020"].forEach((ecma) => {
      it(`can load the System.register ${ecma} bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-animations.js`
        );
        expect(m.BrowserAnimationsModule).toBeDefined();
      });

      it(`can load the System.register ${ecma} prod bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-animations.min.js`
        );
        expect(m.BrowserAnimationsModule).toBeDefined();
      });
    });
  });
});
