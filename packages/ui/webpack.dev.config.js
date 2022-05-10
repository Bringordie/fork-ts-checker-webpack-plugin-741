module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
