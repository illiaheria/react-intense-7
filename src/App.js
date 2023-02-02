import React from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { counter: 0, name: "", surname: "" };
  }

  handleClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    console.log("Did mount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should component update", nextProps, nextState);
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }
  componentDidCatch() {}

  render() {
    console.log("render");
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
