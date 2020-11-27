const { override, addWebpackPlugin } = require('customize-cra');
const { InjectManifest } = require('workbox-webpack-plugin');
module.exports = (webpack, ...args) => {
    webpack.plugins.pop(); // removes the GenerateSW (service worker) plugin so we can add a custom one
    const overridenConfiguration = override(addWebpackPlugin(new InjectManifest({
        swSrc: '.client/src/sw.js',
        swDest: './service-worker.js'
    }),
    ),
    )(webpack, ...args);
    return overridenConfiguration;
};