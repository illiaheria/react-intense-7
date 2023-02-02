import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} style={{ marginTop: "20px" }}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
