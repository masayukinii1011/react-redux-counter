import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button';
import { increment, decrement } from '../actions'

class ReduxCounter extends Component {
  render() {
    return (
      <React.Fragment>
        <div>with Redux</div>
        <div>count: {this.props.value}</div>
        <Button className="green" label="+1" handleClick={this.props.increment} />
        <Button className="red" label="-1" handleClick={this.props.decrement} />
      </React.Fragment>
    )
  }
}

//このコンポーネントのpropsにStoreのstateを渡す。このコンポーネントのpropsのvalueに、count.jsのvalueを渡す
const mapStateToProps = state => ({ value: state.count.value })

//このコンポーネントのpropsにActionCreatorを紐づけ。このコンポーネントのpropsのincrementにActionCreatorのicrementを、decrementにActionCreatorのdecrementを紐付け
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

//ReduxとReactコンポーネントを紐付け
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter)