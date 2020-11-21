#  源码分析

## 国际化的命名规范 BEM

1. 今天会取名，明天会取类名

取类名
- .weui-btn
   btn  组件名，组成网站的基础构件， 70%都是由框架提供的， 基础类
   weui  项目前缀 tb  tm  项目组

2. css 知识点
- 元素分为行内元素和块级元素   inline  bolck     inline-block 
- 元素在页面上的占位，由内容（wh）padding border margin position  盒子模型

3. 面向对象的css
 - 一个元素有多个类
 .weui-btn   block   基础类
 .weui-btn_primary   Modifier   多态


 4. 安装了一个插件
  node js 的后端
  npm i -g live-server
   live-server  web服务器

5. 结构
   结构套路   移动端页面   超越项目的
   .page>.page__hd+.page__bd
   weui 项目组
   使用 BEM命名  搭积木
   block 块
   Element 子元素 __
   Modifier  装饰 _