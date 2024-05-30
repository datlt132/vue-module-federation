const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  publicPath: 'http://localhost:9002/',
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'csLegal',
        filename: 'remoteEntry.js',
        remotes:{
          feComponent: 'feComponent@http://localhost:9003/remoteEntry.js',
        },
        exposes: {
          './App': './src/App',
        },
        shared: require('./package.json').dependencies,
      }),
    ],
  },
  devServer: {
    port: 9002,
  },
};
