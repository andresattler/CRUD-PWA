const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
   output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
    		use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',				  
            options: {
              modules: true,
              localIdentName: '[name]-[local][hash:base64:6]'
            }
          },
          { loader: "stylus-loader" }
        ]
			}		
	 ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlPlugin({
      template: '!pug-loader!src/index.pug'
    })
  ]
}
