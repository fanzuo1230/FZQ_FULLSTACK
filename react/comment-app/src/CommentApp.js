// 应用的根组件
import React from 'react';
// css 分组件来写的
import './CommentApp.css';
import CommentList from './CommentList.js';//json
import CommentForm from './CommentForm.js';//json
class CommentApp extends React.Component{//通过继承快速创建
    //至少要实现的方法
    constructor(){
        super()
        this.state={
            name:'CommentApp'
        }
    }
    render(){// 负责 jsx template wxml
        return( //JSX react template XML in JS
            //html 也叫 xml 用于网页标签的xml叫html
            //react 中有种 JSX 来放模板 
            <div className="wrapper">
                 {this.state.name}
                 <CommentForm/>
                 <CommentList/>
            </div>
        )
    }
}

export default CommentApp;//向外输出一下 挂载到root dom上的 react的区域