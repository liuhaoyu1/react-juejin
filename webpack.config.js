module.exports = {
    entry: './main.js', // 入口文件路径
    output: {
        path: '/',
        filename: 'index.js'
    },
	mode:'development',
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        rules: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            }
        ]
    }
}