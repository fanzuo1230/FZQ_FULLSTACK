# js 常考内容



es6/红宝书 你不知道的js leetcode
单线程的语言 ， 数据通信相关 vue/react 不学
1. npm init -y
2. npm i json-server
npm run server:json
    来个命令，怎么启动db.json 成后台数据
    http server 3000/users db.json 作为数据源提供出来访问 后台准备好了

    http GET http://localhost:3000/users  user[] 
   
3. db.json 数据文件
    json 是js 前端和后端通信的数据文件

- 要加一个用户怎么办？
 POST 保存表单的 name -》http://localhost:3000/users
- promise  五星  异步

- postman 可以用来做http访问代理

- 前端 + 后端
    live-server http 前端服务 index。html 8080
    json-server 后端数据 1234
    前端和后端要怎么数据通信
    前端去拉取后端的数据
    get 1234  /users 获取
    保存就 post 1234 

- ajax 的表达一下
    JS 最重要的考点  ： XMLHttpRequest 对象
    1. 是历史性的突破， 带来前端主动请求数据能力， 微博Ajax应用
        前端更主动 ajax + DOM 页面变得更加丰富，动态
    2.  http://localhost:3000/users 一切皆资源 Restfull
        数据资源 GET 请求动作 path/users[]
        POST 新增的/users {name:''}
    3. XMLHttpRequest ActiveXObject("Microsoft.XMLHTTP")
        但是这叫浏览器嗅探 if else 
        let httpRequest ; http 协议 Request response
        - 创建好对象
        - .open('GET','url',ture) 打开一个请求通道 
         .sent() 这个请求真的就发送了
         .onreadystatechange
         XMLHttprequest.Done 完成了
         JSON.parse(HTTpRequest.responseText) 返回的数据
         json 数组 -> html 数组 map<li>${user.id}-${user.name}</li>` innerHTML