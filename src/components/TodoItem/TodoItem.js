import React, { useEffect } from "react";
import Button from "../Button/Button";

export const TodoItem = ({
  todo,
  changeStatus,
  deleteTodo,
  changeStatusButtonText,
}) => {
  // 4
  //   useEffect(() => {
  //     console.log("Did mount", todo.name);
  //     return () => {
  //       console.log("Will unmount", todo.name);
  //     };
  //   }, []);

  return (
    <div style={{ display: "flex", padding: "10px 0" }}>
      {todo.name}
      <Button onClick={() => deleteTodo(todo.id)}>delete</Button>
      <Button onClick={() => changeStatus(todo.id)}>
        {changeStatusButtonText}
      </Button>
    </div>
  );
};
