var path = require("path");
process.traceDeprecation = true;
module.exports = {
    entry: {
        bundle: ["./index.js"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: "babel-loader",
            options: {
                presets: ["es2015", "react"]
            }
        }]
    }
};
