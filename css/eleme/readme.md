- stylus 模块化
    @import 引入

- vertical-align:top 
    兄弟（同级）元素的对齐方式，有图片的时候
    inline-block + font-size 0 即不换行也不行内


- brand 图标 60*36 
    30 * 18 手机大部分都是retina (双倍显示)屏
    三倍 retina 屏 
    前端别打包，图片要搞好

    css像素是 物理像素 与手机无关 30*18
    在手机中显示retina (双倍显示)屏  60*36

    @media (-webkit-min-device-pixel-ratio: 3) //媒体选择器(最小像素比例为3)


- bg-img($url) 就是一个函数， mixin 混合
    函数运行后有一个返回值
    mixin 是所有的代码都能混到调用它的位置去
    完成这部分代码的的复用

- stylus 让css 变成了编程语言