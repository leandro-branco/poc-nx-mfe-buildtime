const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  config.context = process.cwd();
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'creators',
      filename: 'remoteEntry.js',
      exposes: {
        './App': 'apps/mfe-creators/src/app/App.tsx',
      },
      shared: {
        ...dependencies,
        react: { singleton: true, strictVersion: true, requiredVersion: dependencies['react'], eager: true },
        'react-dom': { singleton: true, strictVersion: true, requiredVersion:  dependencies['react-dom'], eager: true },
        firebase: { singleton: true, strictVersion: true, requiredVersion:  dependencies['firebase'], eager: true },
      },
    })
  );

  config.output.publicPath = 'http://localhost:4201/';

  return config;
};
