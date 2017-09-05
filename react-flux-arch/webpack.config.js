module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: "C:\\josh\\React\\React\\react-flux-arch\\dist",
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: "C:\\josh\\React\\React\\react-flux-arch\\dist"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};