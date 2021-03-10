// 与 parcel 的不同，配置繁琐
//npm run build webpack --mode=development
// module node 模块化  commonjs
//import export es6  export default
module.exports = {
    entry: './main.js',//入口
    output: {//出口
      filename: 'bundle.js'
    }
  }