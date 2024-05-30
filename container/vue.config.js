const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  publicPath: 'http://localhost:8080/',
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'consumer',
        filename: 'remoteEntry.js',
        remotes: {
          baseApp: 'baseApp@http://localhost:9001/remoteEntry.js',
          csLegal: 'csLegal@http://localhost:9002/remoteEntry.js',
        },
        shared: require('./package.json').dependencies,
      }),
    ],
  },
};
