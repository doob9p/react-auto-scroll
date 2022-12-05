import { babel } from "@rollup/plugin-babel"; // rollup과 babel 연동 플러그인
import nodeResolve from "@rollup/plugin-node-resolve"; // node_modules에서 써드파티 모듈을 사용할 수 있게해주는 플러그인
import commonjs from "@rollup/plugin-commonjs"; // commonjs 형태의 모듈을 es모듈로 변환해주는 플러그인
import typescript from "rollup-plugin-typescript2"; // typescript 번들링 플러그인 (rollup-plugin-typescript 개선된 버전)
import peerDepsExternal from "rollup-plugin-peer-deps-external"; // package.json에 명시된 peerDependency 모듈을 번들 결과에서 제외 시키는 모듈
import postcss from "rollup-plugin-postcss"; // postcss 연동 플러그인
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "./dist",
      format: "cjs",
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    {
      file: pkg.module,
      format: "es",
    },
    {
      name: pkg.name,
      file: pkg.browser,
      format: "umd",
    },
  ],
  plugins: [
    commonjs(),
    peerDepsExternal(),
    nodeResolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: "./tsconfig.json",
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**/*.(ts|tsx|js|jsx)",
      include: "src/**/*.(ts|tsx|js|jsx)",
      extensions: [".ts", ".tsx", ".js", ".jsx", ".es", ".es6", ".mjs"],
    }),
    postcss(),
  ],
};
