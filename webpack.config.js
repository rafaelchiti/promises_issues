var path = require('path');


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      // IMPORTANT: we don't want to process EVERY single JS file with babel
      // loader. We only want to process the files inside our app structure
      // otherwise this could get very slow or even fail.
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
    ]
  },
  resolve: {
    // Needed so you can require('a') instead of require('a.jsx')
    extensions: ["", ".js", ".jsx", ".json", ".coffee"]
  }
};
