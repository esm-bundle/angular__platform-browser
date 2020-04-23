import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import packageJson from "./package.json";

function createConfig({
  format,
  target,
  minify,
  resolvedAngularCore,
  resolvedAngularCommon,
}) {
  let dir = format === "module" ? "esm" : format;
  dir += `/${target}`;

  return {
    input: `./src/${target}/angular-platform-browser.js`,
    output: {
      file: `${dir}/angular-platform-browser${
        resolvedAngularCore ? ".resolved" : ""
      }${minify ? ".min" : ""}.js`,
      sourcemap: true,
      format,
      banner: `/* @angular/platform-browser@${packageJson.version} */`,
      paths: {
        "@angular/core": resolvedAngularCore
          ? `https://cdn.jsdelivr.net/npm/@esm-bundle/angular__core@${resolvedAngularCore}/esm/${target}/angular-core.resolved${
              minify ? ".min" : ""
            }.js`
          : "@angular/core",
        "@angular/common": resolvedAngularCommon
          ? `https://cdn.jsdelivr.net/npm/@esm-bundle/angular__common@${resolvedAngularCommon}/esm/${target}/angular-common.resolved${
              minify ? ".min" : ""
            }.js`
          : "@angular/common",
      },
    },
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      minify &&
        terser({
          output: {
            comments: /@angular\/platform-browser@/,
          },
        }),
    ],
    external: ["@angular/core", "@angular/common"],
  };
}

export default () => {
  const angularCoreDep = packageJson.devDependencies["@angular/core"];
  const resolvedAngularCore = angularCoreDep.slice(
    angularCoreDep.lastIndexOf("@") + 1
  );

  const angularCommonDep = packageJson.devDependencies["@angular/common"];
  const resolvedAngularCommon = angularCommonDep.slice(
    angularCommonDep.lastIndexOf("@") + 1
  );

  return [
    createConfig({
      format: "module",
      target: "es5",
      minify: true,
      resolvedAngularCore,
      resolvedAngularCommon,
    }),
    createConfig({
      format: "module",
      target: "es5",
      minify: false,
      resolvedAngularCore,
      resolvedAngularCommon,
    }),
    createConfig({
      format: "module",
      target: "es5",
      minify: true,
    }),
    createConfig({
      format: "module",
      target: "es5",
      minify: false,
    }),
    createConfig({
      format: "module",
      target: "es2015",
      minify: true,
      resolvedAngularCore,
      resolvedAngularCommon,
    }),
    createConfig({
      format: "module",
      target: "es2015",
      minify: false,
      resolvedAngularCore,
      resolvedAngularCommon,
    }),
    createConfig({
      format: "module",
      target: "es2015",
      minify: true,
    }),
    createConfig({
      format: "module",
      target: "es2015",
      minify: false,
    }),
    createConfig({ format: "system", target: "es5", minify: true }),
    createConfig({ format: "system", target: "es5", minify: false }),
    createConfig({ format: "system", target: "es2015", minify: true }),
    createConfig({ format: "system", target: "es2015", minify: false }),
  ];
};
