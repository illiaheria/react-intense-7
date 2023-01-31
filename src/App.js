import React from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends React.Component {
  state = { counter: 0, name: "", surname: "" };
  inputRef = React.createRef(null);

  handleClick = () => {
    // this.inputRef.current.focus();
    this.setState(
      (prevState) => ({ counter: prevState.counter + 1 }),
      () => {
        console.log("App state has updated");
      }
    );
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidCatch() {}
  render() {
    // console.log("Input ref", this.inputRef.current);
    return (
      <div className="App">
        <header className="App-header">
          <Counter
            counter={this.state.counter}
            handleClick={this.handleClick}
          />
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            name="surname"
            value={this.state.surname}
            onChange={this.handleInputChange}
          />
        </header>
      </div>
    );
  }
}

export default App;
