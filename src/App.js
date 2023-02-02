import React from "react";
import TodoList from "./components/todoList/TodoList";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import "./App.css";

class App extends React.Component {
  state = {
    todo: [
      { name: "Learn React", id: "1298345", status: "wip" },
      { name: "Add todo", id: "98234", status: "wip" },
      { name: "Play football", id: "8934", status: "wip" },
      { name: "Make hw", id: "23", status: "wip" },
    ],
    inputValue: "",
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  addTodo = () => {
    if (!this.state.inputValue) return;
    this.setState((prevState) => {
      return {
        todo: [
          ...prevState.todo,
          { name: prevState.inputValue, id: new Date(), status: "wip" },
        ],
        inputValue: "",
      };
    });
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => {
      return {
        todo: prevState.todo.filter((todoItem) => todoItem.id !== todoId),
      };
    });
  };

  render() {
    return (
      <Form>
        <div className="App">
          <header className="App-header">
            <TodoList list={this.state.todo} deleteTodo={this.deleteTodo} />
            <Input
              value={this.state.inputValue}
              handleInputChange={this.handleInputChange}
            />
            <Button onClick={this.addTodo}>Add Todo</Button>
          </header>
        </div>
      </Form>
    );
  }
}

export default App;
