import React, { useContext } from "react";
import { FormContext } from "../Form/Form";
import { TodoItem } from "../TodoItem/TodoItem";

const TodoList = ({ itemsStatusToShow, list, deleteTodo, changeStatus }) => {
  const ctx = useContext(FormContext);
  console.log(ctx);
  const changeStatusButtonText =
    itemsStatusToShow === "wip" ? "finish it" : "return back";

  const filteredList = list?.filter(
    (todo) => todo.status === itemsStatusToShow
  );

  if (!filteredList.length) {
    return "Empty list";
  }

  return filteredList.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      changeStatusButtonText={changeStatusButtonText}
      changeStatus={changeStatus}
      deleteTodo={deleteTodo}
    />
  ));
};

export default TodoList;
