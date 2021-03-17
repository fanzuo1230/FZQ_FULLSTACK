import React, { Component } from 'react';
import './CommentList.css';
import Comment from './Comment';

export default class CommentList extends Component {
  render() {
    return ( // wxml  JSX 
      <div>
        {/* wx:for vue  react 没有指令
          react 是原滋原味的js  
          json array => map  html array 
        */}
        {
          this.props.comments.map(comment => <Comment comment={comment}/>)
        }
      </div>
    )
  }
}