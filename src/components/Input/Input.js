import React from "react";

class Input extends React.Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.handleInputChange}
        style={{ marginTop: "50px" }}
      />
    );
  }
}

export default Input;
