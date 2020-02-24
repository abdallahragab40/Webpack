module.exports = {
  entry: { index: "./App/index.js", vendor: "./App/vendor.js" },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  }
};
