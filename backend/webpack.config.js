const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');


module.exports = {
    entry: "./src/main.ts",
    target: "node",
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [new NodemonPlugin()]
}