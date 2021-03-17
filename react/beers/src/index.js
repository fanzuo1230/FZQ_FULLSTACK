//webpack 的入口文件 #root 真实dom  app根组件
import React from 'react';
import { render } from 'react-dom';
//Route 一条路由配置规则
import { BrowserRouter, Route } from 'react-router-dom'; 
import Main from './components/Main';
import Beer from './components/Beer';
import './index.css';//全局css
//路由的配置
const Root = function(){
  return (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Main}></Route>
      <Route path="/beer" component={Beer}></Route>
    </div>
  </BrowserRouter>)
}

// 能不操作dom 就不去
render(<Root/>,document.getElementById('root'))