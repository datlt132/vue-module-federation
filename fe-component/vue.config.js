const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  publicPath: 'http://localhost:9003/',
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'feComponent',
        filename: 'remoteEntry.js',
        library: { type: 'var', name: 'feComponent' },
        exposes: {
          './Button': './src/components/Button',
          './Section': './src/components/Section',
        },
        shared: require('./package.json').dependencies,
      }),
    ],
  },
  devServer: {
    port: 9003,
  },
};
