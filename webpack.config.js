const path = require('path');
var { name, version, author, license } = require('./package.json');
const { BannerPlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const banner = `/*! @preserve ${name} - ${version} | (c) 2020 - ${author} | License: ${license} */`;

module.exports = {
  entry: './src/index.ts',
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: /src/,
      },
    ],
  },

  plugins: [new BannerPlugin({ raw: true, banner })],

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    filename: 'barikoi.js',
    path: path.resolve(__dirname, 'bundle'),
    libraryTarget: 'umd',
    library: 'BkUnified',
    umdNamedDefine: true,
  },
  devtool: 'source-map',

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: /@preserve/i,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
