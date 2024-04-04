import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
        }],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use:'ts-loader',
        exclude: /node_modules/,
    }

    return [
       typescriptLoader,
        cssLoader,
        svgLoader
    ]
}