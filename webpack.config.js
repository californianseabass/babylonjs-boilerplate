const path = require('path');

module.exports = {
    name: 'babylon',
    entry: [path.resolve(__dirname, 'src/index.ts')],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          exclude: /(node_modules|expo_project|.test.ts$)/,
          resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: [".ts", ".tsx", ".js"]
          },
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: true 
            }
          }
        }
      ]
    }
};
