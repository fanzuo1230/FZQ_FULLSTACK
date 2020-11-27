# css 的程序性

- BEM
    BLOCK weui-cell 项目名字  xp(公司名) 

- stylus
    css 有太多规则
    stylus  是css的超集，可以编译成css

- 省去了{：；} 提高了效率

- stylus -w cell.styl -o cell.css  监听cell.styl的改变，无论怎么变都是cell.css
  写的是styl文件，html中无法显示的，
  -o 编译一下，cell.css
  -w 边写边编译


- 弹性布局 flex
    1. 如何启用的？
    display:flex|inline|block|inline-block
    弹性布局设置在父元素上，启动了新的空间
    原有的盒子属性被打破了，
    .weui-cell(display:flex)>创立了新的空间，原有块级能力被干掉了
    .weui-cell__bd(flex:1 主元属)  + .weui-cell__hd（自动变为辅元素）


- 伪元素
    css高级使用技巧，唯一一个可以在css中声明的html元素，箭头、边框等高级特性
    
    content 属性是必须的