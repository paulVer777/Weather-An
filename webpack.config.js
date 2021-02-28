const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  mode:"development",
  plugins:[
      new webpack.DefinePlugin({
    AAPID: JSON.stringify('743b22657c7621928394b987679e3fe3')
  }),
  new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./public",
    hot:true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js','jsx']
  },
};

