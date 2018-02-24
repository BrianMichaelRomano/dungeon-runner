const path = require('path');

const config = {
    entry: './app/src/index.js',
    output: {
        path: path.resolve(__dirname, 'app/build'),
        filename: 'bundle.js'
    }
};

module.exports = config;