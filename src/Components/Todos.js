import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  const myStyle = {
    minHeight: "150vh",
    margin: "20px auto",
  };

  return (
    <div className="container " style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No Values"
        : props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            );
          })}
    </div>
  );
};
