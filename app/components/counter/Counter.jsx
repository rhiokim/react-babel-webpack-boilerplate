import React, {Component, PropTypes} from 'react';

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  }

  render() {
    const {increment, decrement, counter} = this.props;
    return (
      <div>
        <div>Counter</div>
        <div>{counter}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}
