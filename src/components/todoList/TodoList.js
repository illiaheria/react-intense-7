import React from "react";
import Button from "../Button/Button";
import { FormContext } from "../Form/Form";

class TodoList extends React.Component {
  render() {
    console.log(this.context);
    return this.props.list.map((todo) => {
      return (
        <React.Fragment key={todo.id}>
          <div>{todo.name}</div>
          <Button onClick={() => this.props.deleteTodo(todo.id)}>delete</Button>
        </React.Fragment>
      );
    });
  }
}

TodoList.contextType = FormContext;
export default TodoList;
