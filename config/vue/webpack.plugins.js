const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = [
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  }),
];
