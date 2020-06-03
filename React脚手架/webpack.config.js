// Nodejs的模块 path 专门用来处理文件路径
const path = require("path");
// 引入插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
/**
 * 封装一个处理绝对路径的方法
 * @param {String} relative 相对路径
 * @return {String} 基于项目根目录的绝对路径
 */
function resolve(relative) {
  // __dirname 代表当前文件所在的文件夹绝对路径
  // __dirname 其实就是项目根目录
  return path.resolve(__dirname, relative);
}

module.exports = {
  // 入口
  entry: "./src/index.js",
  // 输出
  output: {
    path: undefined, // 输出的目录
    filename: "[name].js", // 输出文件名
    publicPath: '/'
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.jsx?$/, // 规则对哪些文件生效
        // exclude: /node_modules/, // 排除node_modules文件，其他文件都检查
        include: [resolve("src")], // 包含src下面的文件，只检查包含的文件，而其他文件不检查
        use: {
          // 需要下载
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // 预设，babel要干什么活
            plugins: [
              ["@babel/plugin-proposal-decorators", { legacy: true }], // 解决装饰器语法
              ["@babel/plugin-proposal-class-properties", { loose: true }],
            ], // 插件
          },
        },
      },
      {
        test: /\.css$/,
        include: [resolve("src")],
        use: [
          "style-loader",
          // 将css编译成js字符串，以commonjs规则插入到js文件中
          "css-loader",
        ],
      },
      {
        test: /\.(png|gif|jpe?g|webp)$/,
        include: [resolve("src")],
        use: {
          loader: "url-loader",
          options: {
            limit: 10 * 1024,
            name: "static/media/[hash:10].[ext]",
          },
        },
      },
      {
        // test: //,  // 不写test，代表匹配所有文件
        exclude: [/\.jsx?$/, /\.css$/, /\.html$/, /\.(png|gif|jpe?g|webp)$/],
        use: {
          // 作用：将文件加载，原封不动输出出去(只修改名称)
          // 能处理所有类型文件
          loader: "file-loader",
          options: {
            name: "static/media/[hash:10].[ext]",
          },
        },
      },
    ],
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("public/index.html"),
    }),
    // 复制文件
    new CopyPlugin([
      {
        from: resolve("public"), // 将public下面的所有文件复制
        to: resolve("dist"), // 复制到dist目录下去
        ignore: ["index.html"], // 复制时忽略index.html文件（这个文件已经被HtmlWebpackPlugin处理了）
      },
    ]),
  ],
  // 模式
  mode: "development",
  // 自动化，开发服务器
  devServer: {
    // contentBase: resolve('build'), // 开发服务器将哪个目录的资源暴露出去
    contentBase: resolve("public"), // 开发服务器将哪个目录的资源暴露出去
    port: 9527, // 服务器端口号
    host: "localhost", // 服务器域名,
    compress: true,
    open: false, // 自动打开浏览器
    hot: true,
    quiet: false, // 启用静默模式，在终端不打印多余信息
    clientLogLevel: "none", // 在浏览器控制台不打印多余内容
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
      },
    },
    historyApiFallback: true,
  },
  devtool: "cheap-module-source-map", // 开发环境
  // devtool: "source-map", // 生产环境
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      // 配置路径别名
      "@": resolve("src"),
    },
  },
};
