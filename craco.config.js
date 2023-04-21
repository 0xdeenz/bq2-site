const webpack = require('webpack');

module.exports = {
    webpack: {
        plugins: {
            add: [
                new webpack.ProvidePlugin({
                    Buffer: ['buffer', 'Buffer'],
                    process: 'process/browser.js',
                })
            ]
        },
        configure: {
            resolve: {
                fallback: {
                    'assert': require.resolve('assert'),
                    'BigInt': require.resolve('big-integer'),
                    'constants': false,
                    'crypto': false,
                    'fs': false,
                    'http': require.resolve('stream-http'),
                    'https': require.resolve('https-browserify'),
                    'os': require.resolve('os-browserify/browser'),
                    'path': false,
                    'stream': require.resolve('stream-browserify'),
                    'tty': false,
                    'url': false,
                    'zlib': false
                }
            },
        },
    },
};