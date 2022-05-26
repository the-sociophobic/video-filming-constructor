module.exports = {
  babel: {
      presets: [
        ["@babel/preset-typescript", { allowDeclareFields: true }],
        "@babel/preset-react",
        "@babel/preset-env",
      ],
      plugins: [],
      loaderOptions: { /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */ },
      loaderOptions: (babelLoaderOptions, { env, paths }) => { return babelLoaderOptions; }
  },
  // typescript: {
  //     enableTypeChecking: true /* (default value)  */
  // },
  // webpack: {
  //     alias: {},
  //     plugins: {
  //         add: [], /* An array of plugins */
  //         add: [
  //             plugin1,
  //             [plugin2, "append"],
  //             [plugin3, "prepend"], /* Specify if plugin should be appended or prepended */
  //         ], /* An array of plugins */
  //         remove: [],  /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */
  //     },
  //     configure: { /* Any webpack configuration options: https://webpack.js.org/configuration */ },
  //     configure: (webpackConfig, { env, paths }) => { return webpackConfig; }
  // },
}