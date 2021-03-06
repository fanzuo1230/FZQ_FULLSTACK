import React, { Component } from 'react';
import './CommentInput.css';

export default class CommentInput extends Component {
  constructor() {
    super();
    this.state = { // 小程序里的data
      username: '',
      content: ''
    }
  }
  handleUsernameChange(event) { // 小程序 方法 放在类里
    // 让state 跟表单数据绑定且一致
    this.setState({ //小程序的setData
      username: event.target.value
    })
  }
  handleContentChange(event) {
    this.setState({ //小程序的setData
      content: event.target.value
    })
  }
  handleSubmit() { //提交时间
    // 新的comment 提交到父类 CommentApp comments 
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content
      })
    }
    
  }
  render() {
    return ( // wxml  JSX 
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button
            onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}