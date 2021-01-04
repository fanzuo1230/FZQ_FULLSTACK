- 阮一峰

    1. Js变量的数据类型由值来决定的，
        常量的话，es6之前没有常量，都是var
        - 类型不可改变
        - 简单数据类型的值不改变， 复杂数据类型值是可以改变的
        - 数值型、字符串、布尔值、undefined、null、symbol、对象（数组、函数）


    2. typeof [1,2,3]如何知道它是数组？
        区分简单数据类型和复杂数据类型
        复杂数据类型之中 有 function也能得到
        typeof  可以正确得到数据类型的（number  string  Boolean null undefined symbol  object（array，function））   但  不够细致   使用这个可以Object.prototype.toString.call(o)


    3. Object.prototype.toString.call() 核心
        
        Object 是谁？
