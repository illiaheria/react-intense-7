import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.counter}</p>
        <button onClick={this.props.handleClick}>Increase</button>
      </div>
    );
  }
}

export default Counter;
