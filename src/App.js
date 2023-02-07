import React, { useState, useEffect, useMemo, useCallback } from "react";
import TodoList from "./components/todoList/TodoList";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Dropdown from "./components/Dropdown/Dropdown";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("wip");
  const [todo, setTodo] = useState([
    { name: "Learn React", id: "1298345", status: "wip" },
    { name: "Add todo", id: "98234", status: "wip" },
    { name: "Play football", id: "8934", status: "wip" },
    { name: "Make hw", id: "23", status: "wip" },
  ]);

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  const addTodo = () => {
    if (!inputValue) return;
    setTodo((prevState) => {
      return [
        ...prevState,
        { name: inputValue, id: new Date(), status: "wip" },
      ];
    });
    setInputValue("");
  };

  const deleteTodo = (todoId) => {
    setTodo((prevState) => {
      return prevState.filter((todoItem) => todoItem.id !== todoId);
    });
  };

  const changeStatus = (todoId) => {
    setTodo((prevState) => {
      return prevState.map((item) => {
        if (item.id === todoId) {
          return { ...item, status: item.status === "wip" ? "expired" : "wip" };
        }
        return item;
      });
    });
  };

  // 1
  // useEffect(() => {
  //   console.log("useEffect");
  // });

  // 2
  // useEffect(() => {
  //   console.log("useEffect Didmount");
  //   return () => {};
  // }, []);

  // 3
  // useEffect(() => {
  //   console.log("Update", inputValue);
  //   return () => {
  //     console.log("Unmount", inputValue);
  //   };
  // }, [inputValue]);

  // const object = useMemo(() => {
  //   return { name: "John", age: 21 };
  // }, []);

  return (
    <Form>
      <div className="App">
        <header className="App-header">
          <Dropdown value={dropdownValue} onChange={handleDropdownChange} />
          <TodoList
            list={todo}
            deleteTodo={deleteTodo}
            changeStatus={changeStatus}
            itemsStatusToShow={dropdownValue}
          />
          <Input
            value={inputValue}
            handleInputChange={handleInputChange}
            placeholder="Enter text"
            // object={object}
          />
          <Button onClick={addTodo}>Add Todo</Button>
        </header>
      </div>
    </Form>
  );
};

export default App;
