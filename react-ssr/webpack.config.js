const path = require("path");

module.exports = [
  {
    entry: "./src/server",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "server.js"
    },
    target: "node",
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader"
        }
      ]
    }
  },
  {
    entry: "./src/client",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "client.js"
    }
  }
];
