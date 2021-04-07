'use strict';
const path = require('path');
// 统一路径解析
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// 包括生产和开发的环境配置信息
module.exports = {
  settings: {
    enableESLint: false, // 调试模式是否开启ESLint，默认开启ESLint检测代码格式
    enableESLintFix: false, // 是否自动修正代码格式，默认不自动修正
    enableStyleLint: true, // 是否开启StyleLint，默认开启ESLint检测代码格式
    enableStyleLintFix: false // 是否需要StyleLint自动修正代码格式
  },
  webpack: {
    resolve: {
      // webpack的resolve配置
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // 用于配置webpack在尝试过程中用到的后缀列表
      alias: {
        '@': resolve('src'),
        $public: resolve('public'),
        $assets: resolve('src/assets'),
        $components: resolve('src/components'),
        $common: resolve('src/common'),
        $pages: resolve('src/pages'),
        $layout: resolve('src/layout'),
        $utils: resolve('src/utils'),
        $store: resolve('src/store'),
        $data: resolve('src/data'),
        $api: resolve('src/api'),
        $types: resolve('src/types')
      },
    },
    // 从输出的 bundle 中排除依赖
    externals: [
      {
        react: {
          commonjs: 'react',
          commonjs2: 'react',
          amd: 'react',
          root: ['React'],
        },
      },
      {
        'react-dom': {
          commonjs: 'react-dom',
          commonjs2: 'react-dom',
          amd: 'react-dom',
          root: ['ReactDOM'],
        },
      },
    ],
    // sassResources中的sass文件会自动注入每一个sass文件中
    sassResources: [
      resolve('./src/assets/scss/mixin.scss'),
      resolve('./src/assets/scss/common.scss')
    ],
  },
  envParams: {
    // 项目系统环境变量
    common: {
      // 通用参数
      '#version#': '20210315.1'
    },
    local: {
      // 本地开发环境
      '#dataApiBase#': 'http://jdwidget.jd.com/server/api',// 数据接口根地址
      '#assetsPublicPath#': 'http://localhost:1024', // 静态资源根地址
      '#routeBasePath#': '/' // 路由根地址
    },
    test: {
      // 线上测试环境系统参数（备注：请按需调整）
      '#dataApiBase#': 'http://jdwidget.jd.com/server/api',// 数据接口根地址
      '#assetsPublicPath#': 'http://localhost:1024', // 静态资源根地址
      '#routeBasePath#': '/' // 路由根地址
    },
    online: {
      // 线上正式环境系统参数（备注：请按需调整）
      '#dataApiBase#': 'http://jdwidget.jd.com/server/api',// 数据接口根地址
      '#assetsPublicPath#': 'http://localhost:1024', // 静态资源根地址
      '#routeBasePath#': '/' // 路由根地址
    }
  },
  dev: {
    // 多页模式
    entry: { // webpack构建入口
      index: './src/pages/index.tsx', // 首页入口
      404: './src/pages/404.tsx', // 404页
    },
    // 用于开启本地调试模式的相关配置信息
    NODE_ENV: 'development', // 生成环境：production，开发环境：development
    port: 80,
    autoOpenBrowser: true,
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '',
    hostname: 'localhost',
    cssSourceMap: false,
    proxyTable: {
      '/server/api': {
        target: 'http://jdwidget.jd.com', // 服务端本地接口根地址
        ws: true,
        changeOrigin: true
      }
    },
  },
  build: {
    // 单页模式
    /*entry: { // webpack构建入口
      index: './src/pages/index.tsx', // 首页入口
    },*/
    // 多页模式
    entry: { // webpack构建入口
      index: './src/pages/index.tsx', // 首页入口
      404: './src/pages/404.tsx', // 404页
    },
    // 用于构建生产环境代码的相关配置信息
    NODE_ENV: 'production',
    assetsRoot: resolve('./dist'), // 打包后的文件绝对路径（物理路径）
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '', // 资源引用二级路径
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css', 'json'],
    bundleAnalyzerReport: false,
  },
};
