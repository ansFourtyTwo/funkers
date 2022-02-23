const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // skip typechecking for speed
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
              test: /\.vue$/,
              loader: 'vue-loader',
            },
            {
              test: /\.css$/,
              use: [
                'vue-style-loader',
                'css-loader'
              ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin
    ]
}