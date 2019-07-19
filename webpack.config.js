const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),

    entry: './js/main.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};