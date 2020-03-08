import React, { Component } from 'react';
import Button from './button';

export default class Counter extends Component {
  constructor() {
    super();
    //状態の初期値
    this.state = { value: 0 }
  }

  //メソッド
  increment = () => {
    //stateの変更にはsetStateを使用
    this.setState({ value: this.state.value + 1 })
  }

  decrement = () => {
    this.setState({ value: this.state.value - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>without Redux</div>
        <div>count: {this.state.value}</div>
        {/* 子コンポーネントのpropsに値を渡す */}
        <Button className="green" label="+1" handleClick={this.increment.bind(this)} />
        <Button className="red" label="-1" handleClick={this.decrement.bind(this)} />
      </React.Fragment>
    )
  }
}