const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: true,
          sourceMap: true,
          importLoader: 2,
        },
      },
      "sass-loader",
    ],
  });

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[name].css",
    })
  );

  // Return the altered config
  return config;
};
