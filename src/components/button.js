import React, { Component } from 'react';

export default class Button extends Component {
  //親コンポーネントから渡ってきたメソッドを使用できるように
  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      //親コンポーネントから渡ってきた値をpropsから取り出す
      <button className={this.props.className} onClick={this.handleClick.bind(this)}>
        {this.props.label}
      </button>
    )
  }
}